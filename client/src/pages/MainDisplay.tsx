// import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Main() {
  const userID = useLocation().state.user;
  // const [meals, setMeals] = useState({});

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/user/meals", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await response.json();
  //       setMeals(data); 
  //       console.log(meals);
  //     } catch (error) {
  //       console.error("Error fetching meals:", error);
  //     }
  //   };

  //   fetchMeals();
  // }, []); 

  return (
    <>
      <div>Hello World</div>
      <p>{userID}</p>
      {/* <p>{meals.breakfast}</p> */}
    </>
  )
}