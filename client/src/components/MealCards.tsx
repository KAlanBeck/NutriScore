export default function MealCards({ mealType, foods }) {

  function capitalizeWords(str: string) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div className="mealCard">
      <h2>{mealType}</h2>
      {foods.map((food, index: number) => (
        <div key={index}>
          <h3>{capitalizeWords(food.name)}</h3>
          <div className="macros">
            <p>Calories: {food.calories}</p>
            <p>Fat: {food.fat} g</p>
            <p>Protein: {food.protein} g</p>
            <p>Carbs: {food.carbs} g</p>
          </div>
        </div>
      ))}
    </div>
  );
}