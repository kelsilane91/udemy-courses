import { useContext } from "react";
import CartContext from "../../context/cart-context";
import { MealItem as MealItemType } from "../../types/MealItem";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

type Props = {
  meal: MealItemType;
};
const MealItem = ({ meal }: Props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${meal.price.toFixed(2)}`;

  const onAddToCart = (amount: number) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={onAddToCart}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
