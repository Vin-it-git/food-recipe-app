import Item from "./item";

export default function ItemList({food, isloading}) {
    return (
      <div>
        {isloading ? (<p>loading...</p>) : (
          food.extendedIngredients.map((item) => (
            <Item item={item} />
          ))
        )}
      </div>
    );
  }
  