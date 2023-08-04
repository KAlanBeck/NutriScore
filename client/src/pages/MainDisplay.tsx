import { useEffect, useState } from "react";
import Header from "../components/Header"
import MealCards from "../components/MealCards";
import TotalsDisplay from "../components/TotalsDisplay";

export default function Main() {
  const [meal, setMeal] = useState('breakfast');
  const [food, setFood] = useState('');
  const [responseData, setResponseData] = useState(null);

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
      // console.log(data)
      setResponseData(data);
      setFood('');
      // console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleLogout = () => {
    // Handle logout functionality here
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
        // console.log('data', data);
        // console.log('response data first', responseData);
      })
      .catch((error) => {
        console.log(error);
      })
    
  }, []);

  useEffect(() => {
    if (responseData) {
      // Do something with the updated responseData, if needed
      // console.log(responseData);
      // console.log('response data second', responseData);

    }
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
      <TotalsDisplay responseData={responseData}/>
      
    </>
  )
}