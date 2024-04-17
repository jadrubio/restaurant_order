import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const exisitingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...exisitingItem,
        quantity: exisitingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exisitingItem = state.items[existingItemIndex];
    const updatedItems = [...state.items];

    if (exisitingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...exisitingItem,
        quantity: exisitingItem.quantity--,
      };
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_TO_CART", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_FROM_CART", id });
  };

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
