import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validLogin, setValidLogin] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch('/api/user/login', {
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
          navigate('/main', { state: { user: userID} });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className='loginOuter'>
      <div className="login">
        <h1 className='formHeader'>Login</h1>
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
          <button type="submit" className="formSubmit">
              Login
            </button>
            {validLogin === false ? <div className="invalidMessage">Invalid Username or Password</div> : <></>}
        </form>
        <button className="form-redirect" onClick={() => navigate('/signup')}>Create an Account</button>
      </div>
    </div>
  );
}
