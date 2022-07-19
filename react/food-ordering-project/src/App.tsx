import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./context/cart-context";
function App() {
  const [cartIsShown, setCartIsShown] = useState<boolean>(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onCartShow={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
