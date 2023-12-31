import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validLogin, setValidLogin] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch('/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((userID) => {
        if (userID.error) setValidLogin(false)
        else {
          localStorage.setItem('user', JSON.stringify(userID));
          navigate('/main', { state: { user: userID } });
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }


  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className='signupOuter'>
      <div className="signup">
        <h1 className='formHeader'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button type="submit" className='formSubmit'>Sign up</button>
          {validLogin === false ? <div className="invalidMessage">Invalid Username or Password</div> : <></>}
        </form>
        <button className="form-redirect" onClick={() => navigate('/')}>Login</button>
      </div>
    </div>
  );
}