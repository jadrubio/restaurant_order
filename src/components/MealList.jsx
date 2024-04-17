import { useEffect, useState } from 'react';
import MealItem from './MealItem';
import { MealsApi } from '../api/meals';

const MealList = () => {
  const [meals, setMeals] = useState([])

  useEffect(()=>{
    const getMeals = async() => {
      const meals = await MealsApi.fetchMeals()
      setMeals(meals)
    }

    getMeals()
  },[])
  

  return (
    <ul className="meal-list">
      {meals.map(m => <MealItem key={m.id} meal={m} />)}
    </ul>
  )
}

export default MealList