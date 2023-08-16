import { useEffect, useState } from "react";
import Header from "../components/Header"
import MealCards from "../components/MealCards";
import TotalsDisplay from "../components/TotalsDisplay";
import { useNavigate } from 'react-router-dom';


export default function Main() {
  const [meal, setMeal] = useState('Breakfast');
  const [food, setFood] = useState('');
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  const handleMealChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMeal(event.target.value);
  };

  const handleFoodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFood(event.target.value);
  };

  const handleAddFood = async () => {
    try {
      const response = await fetch("/api/nutrition/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ meal, food }),
      });
      const data = await response.json();
      setResponseData(data);
      setFood('');
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleLogout = () => {

    fetch('/api/user/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(() => navigate('/'))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetch("/api/user/meals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => 
        response.json()
      )
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.log(error);
      })
    
  }, []);

  useEffect(() => {
  }, [responseData]);

  return (
    <>
      <Header
      meal={meal}
      setMeal={setMeal}
      food={food}
      setFood={setFood}
      onMealChange={handleMealChange}
      onFoodChange={handleFoodChange}
      onAddFood={handleAddFood}
      onLogout={handleLogout}
       />

      <div className="mealCardsContainer">
      {responseData &&
              Object.keys(responseData).map((mealType) => (
                <MealCards key={mealType} mealType={mealType} foods={responseData[mealType]} />
              ))}
      </div>
      <div className="totalsDisplay">
        <TotalsDisplay responseData={responseData}/>
      </div>
    </>
  )
}