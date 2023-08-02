// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header"

export default function Main() {
  const [meal, setMeal] = useState('breakfast');
  const [food, setFood] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleMealChange = (event) => {
    setMeal(event.target.value);
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const handleAddFood = async () => {
    try {
      const response = await fetch("/api/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  const handleLogout = () => {
    // Handle logout functionality here
  };

  return (
    <>
      <Header
      meal={meal}
      setMeal={setMeal}
      food={food}
      setFood={setFood}
      responseData={responseData}
      setResponseData={setResponseData}
      onMealChange={handleMealChange}
      onFoodChange={handleFoodChange}
      onAddFood={handleAddFood}
      onLogout={handleLogout}
       />
      
    </>
  )
}