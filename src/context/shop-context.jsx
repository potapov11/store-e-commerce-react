import React, { useState, createContext } from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

//!props.children в данном случае представляет собой дочерние компоненты, которые будут обернуты в ShopContext.Provider и получат доступ к контексту, определенному в ShopContext.
//!<ShopContextProvider>
//!<MyApp />
//!</ShopContextProvider

const defaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //!Новое состояние корзины создается с помощью оператора распространения ({...prev}) - это копирует все существующие свойства предыдущего состояния корзины.
  //!Затем, для элемента с идентификатором itemId, значение этого элемента увеличивается на 1. Это делается с помощью синтаксиса вычисляемых свойств [itemId], который позволяет динамически обращаться к свойству объекта по значению переменной itemId.

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
