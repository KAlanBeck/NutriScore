
import React from "react";

const TotalsDisplay = ({ responseData }) => {

  if (!responseData) {
    return null; // Return null or a loading indicator while waiting for responseData
  }
  
  const calculateTotal = (mealType) => {
    return responseData[mealType].reduce(
      (acc, food) => {
        acc.calories += food.calories;
        acc.fat += food.fat;
        acc.protein += food.protein;
        acc.carbs += food.carbs;
        return acc;
      },
      { calories: 0, fat: 0, protein: 0, carbs: 0 }
    );
  };

  const totalBreakfast = calculateTotal("Breakfast");
  const totalLunch = calculateTotal("Lunch");
  const totalDinner = calculateTotal("Dinner");
  const totalSnacks = calculateTotal("Snacks");

  const grandTotal = {
    calories: totalBreakfast.calories + totalLunch.calories + totalDinner.calories + totalSnacks.calories,
    fat: totalBreakfast.fat + totalLunch.fat + totalDinner.fat + totalSnacks.fat,
    protein: totalBreakfast.protein + totalLunch.protein + totalDinner.protein + totalSnacks.protein,
    carbs: totalBreakfast.carbs + totalLunch.carbs + totalDinner.carbs + totalSnacks.carbs,
  };

  return (
    <div>
      <h2>Totals</h2>
      <p>Total Calories: {grandTotal.calories}</p>
      <p>Total Fat: {grandTotal.fat}</p>
      <p>Total Protein: {grandTotal.protein}</p>
      <p>Total Carbs: {grandTotal.carbs}</p>
    </div>
  );
};

export default TotalsDisplay;
