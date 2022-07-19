import React, { ReactNode, useReducer } from "react";
import { CartItem } from "../types/MealItem";

type Props = {
  children: ReactNode;
};

type State = {
  items: any;
  totalAmount: number;
};

type Action =
  | { type: "ADD_ITEM"; payload: any }
  | { type: "REMOVE_ITEM"; payload: any };

const CartContext = React.createContext({
  items: [],
  addItem: (item: CartItem) => {},
  removeItem: (id: string) => {},
  totalAmount: 0,
});

const cartReducer = (state: State, action: Action) => {
  if (action.type === "ADD_ITEM") {
    const itemIndex = state.items.findIndex(
      (item: CartItem) => item.id === action.payload.id
    );
    const existingCartItem = state.items[itemIndex];
    let updatedItems;
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item: CartItem) => item.id === action.payload
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item: CartItem) => item.id !== action.payload
      );
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return {
    items: [],
    totalAmount: 0,
  };
};
export const CartContextProvider = ({ children }: Props) => {
  const [cartState, dispatchCartUpdate] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = (item: any) => {
    dispatchCartUpdate({ type: "ADD_ITEM", payload: item });
  };
  const removeItemHandler = (item: any) => {
    dispatchCartUpdate({ type: "REMOVE_ITEM", payload: item });
  };
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        totalAmount: cartState.totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
