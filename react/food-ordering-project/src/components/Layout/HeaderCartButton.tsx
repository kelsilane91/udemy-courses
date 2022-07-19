import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../context/cart-context";
type Props = {
  onCartShow: () => void;
};
const HeaderCartButton = ({ onCartShow }: Props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item: any) => {
    return curNumber + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    btnIsHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={buttonClasses} onClick={onCartShow}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
