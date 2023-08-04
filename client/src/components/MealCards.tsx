

export default function MealCards({ mealType, foods }) {

  

  return (
    <div className="mealCard">
      <h2>{mealType}</h2>
      {foods.map((food, index) => (
        <div key={index}>
          <p>Name: {food.name}</p>
          <p>Calories: {food.calories}</p>
          <p>Fat: {food.fat}</p>
          <p>Protein: {food.protein}</p>
          <p>Carbs: {food.carbs}</p>
        </div>
      ))}
    </div>
  );
}