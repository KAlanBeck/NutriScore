import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const calorieController = {
  getNutrition: async (req: Request, res: Response, next: NextFunction) => {
    const { meal, food } = req.body;
    const API_KEY = process.env.API_KEY;

    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/guessNutrition?title=${food}`;
    const headers = {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    };

    try {
      const response = await axios.get(url, { headers });
      const result = response.data;

      const nutrition = {
        name: food,
        calories: result.calories.value,
        fat: result.fat.value,
        protein: result.protein.value,
        carbs: result.carbs.value
      }

      res.locals.meal = meal;
      res.locals.nutrition = nutrition;
      return next();
      
    } catch (error) {
      console.log(`${error} in calorieController.getNutrition`);
    }
  },
};

export default calorieController;