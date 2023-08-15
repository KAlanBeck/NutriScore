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
  return (
    <div className="header">
      <h1 className="logo">NutriScore</h1>
      <div className="mealSelectionContainer">
        <select value={meal} onChange={onMealChange}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snacks">Snacks</option>
        </select>
        <input
          placeholder="Food"
          value={food}
          onChange={onFoodChange}
          required
        ></input>
        <button onClick={onAddFood}>Add Food</button>
      </div>
      <button className="logoutButton" onClick={onLogout}>Logout</button>
    </div>
  );
}
