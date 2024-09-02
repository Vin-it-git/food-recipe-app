import FoodItem from "./FoodItem";

export default function FoodList({foodData, setFoodId}){
    return <div>
        {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} food={food} key={food.id}/>
      ))}
    </div>
}