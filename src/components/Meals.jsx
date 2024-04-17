import { useEffect, useState } from 'react';
import { MealsApi } from '../api/meals';

const Meals = () => {
  const [meals, setMeals] = useState([])

  useEffect(()=>{
    const getMeals = async() => {
      const meals = await MealsApi.fetchMeals()
      setMeals(meals)
    }

    getMeals()
  },[])
  

  return (
    <ul className="meals">
      {meals.map(m => <li key={m.id}>{m.name}</li>)}
    </ul>
  )
}

export default Meals