import styles from './FoodItem.module.css'
export default function FoodItem({food}){
    return <div className={styles.itemContainer}>
        <img src={food.image} alt="" className={styles.itemImage} />
        <div className={styles.itemContent}>
            <p className={styles.itemName}>{food.title}</p>
        </div>
        <div className={styles.buttonContainer}><button className={styles.modernbutton}>View Recipe</button></div>
    </div>
}