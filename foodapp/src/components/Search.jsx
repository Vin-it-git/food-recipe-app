import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "ad9ceb31c588442a9c2e87d97d4fbcc3"
export default function Search({setFoodData}) {
  const [query, setQuery] = useState("pizza");
  
  
  useEffect(() => {
    async function fetchfood(){
        const res =await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        const data =await res.json()
        console.log(data.results)
        setFoodData(data.results)
}
    fetchfood()
  }, [query])
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
}
