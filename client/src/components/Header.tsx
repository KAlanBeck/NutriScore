import { useState } from "react";

export default function Header({
  meal,
  setMeal,
  food,
  setFood,
  onMealChange,
  onFoodChange,
  onAddFood,
  onLogout
}) {
  // const [meal, setMeal] = useState('breakfast');
  // const [food, setFood] = useState('');

  // const handleMealChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setMeal(event.target.value);
  // };

  // const handleFoodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFood(event.target.value);
  // };

  // const handleAddFood = () => {
  //   const addFood = async () => {
      
  //     try {
  //       const response = await fetch("/api/api", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     } catch(error) {
  //       console.log(error);
  //       return error;
  //     }
  //   }

  //   addFood();
  // };

  // const handleLogout = () => {
    
  // };

  const handleAddFood = async () => {
    await onAddFood();
    // The responseData state has been updated with the response data.
    // You can access and use it as needed.
  };

  return (
    <>
      <h1>NutriScore</h1>
      <select value={meal} onChange={onMealChange}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snacks">Snacks</option>
      </select>
      <input
        placeholder="Food"
        value={food}
        onChange={onFoodChange}
      ></input>
      <button onClick={handleAddFood}>Add Food</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}