const fetchMeals = async () => {
  try {
    const res = await fetch("http://localhost:3000/meals");
    if (!res.ok) {
    }
    return await res.json();
  } catch (error) {}
};

export const MealsApi = {
  fetchMeals,
};
