import PieChart from "./PieChart";

const TotalsDisplay = ({ responseData }) => {

  if (!responseData) {
    return null; 
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
    <>
      <div className="totalsData">
        <h2>Daily Total</h2>
        <h3>Calories: {grandTotal.calories}</h3>
        <h3>Fat: {grandTotal.fat} g</h3>
        <h3>Protein: {grandTotal.protein} g</h3>
        <h3>Carbs: {grandTotal.carbs} g</h3>
      </div>
      <div>
        <PieChart chartData={grandTotal}/>
      </div>
    </>
  );
};

export default TotalsDisplay;
