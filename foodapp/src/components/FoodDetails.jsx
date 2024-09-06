import { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
import ItemList from "./itemList";


export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isloading, setIsloading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ad9ceb31c588442a9c2e87d97d4fbcc3";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsloading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img src={food.image} alt="" className={styles.recipeImage} />
        <div className={styles.recipeDetails}>
          <span>
            <strong> &#9202;{food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            👪<strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🥗 Vegan" : ""} </strong>
          </span>
        </div>
        <div>
          💲{" "}
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isloading={isloading}/>
        <h2>Instructions</h2>
        <div className={styles.recipeinstructions}>
          <ol>
            {isloading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
