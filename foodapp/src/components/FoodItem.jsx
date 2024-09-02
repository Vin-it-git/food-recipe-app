import styles from "./FoodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="" className={styles.itemImage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div
        onClick={() => {
          console.log(food.id);
          setFoodId(food.id)
        }}
        className={styles.buttonContainer}
      >
        <button className={styles.modernbutton}>View Recipe</button>
      </div>
    </div>
  );
}
