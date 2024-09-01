import FoodItem from "./FoodItem";

export default function FoodList({foodData}){
    return <div>
        {foodData.map((food) => (
        <FoodItem food={food} key={food.id}/>
      ))}
    </div>
}