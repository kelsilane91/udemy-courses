import { CartItem as CartItemType } from "../../types/MealItem";
import styles from "./CartItem.module.css";

type Props = {
  item: CartItemType;
  onRemove: () => void;
  onAdd: () => void;
};
const CartItem = ({ item, onAdd, onRemove }: Props) => {
  const { name, amount, price: itemPrice } = item;
  const price = `$${itemPrice.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
