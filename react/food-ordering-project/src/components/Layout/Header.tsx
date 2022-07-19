import React from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

type Props = {
  onCartShow: () => void;
};
const Header = ({ onCartShow }: Props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartShow={onCartShow}></HeaderCartButton>
      </header>

      <div className={styles["main-image"]}>
        <img src="/meals.jpeg" alt="meals" />
      </div>
    </>
  );
};

export default Header;
