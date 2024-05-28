import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";
import { PRODUCTS } from "../../assets/js/product";

export function Cart() {
  const { cartItems, addToCart, removeFromCart, deleteLastProduct, oneProducte, setOneProducte, idItem } = useContext(ShopContext);

  let totalAmount = 0;

  const cartItemsList = PRODUCTS.filter((product) => {
    if (cartItems[product.id] && cartItems[product.id] > 0) {
      product.amount = cartItems[product.id];
      return product;
    }
    return null;
  });

  cartItemsList.forEach((item) => {
    totalAmount += item.amount * item.price;
    // totalAmount.toFixed(1);
  });

  totalAmount = Number(totalAmount.toFixed(2));

  function checkIsOne(num) {
    if (num == 1) {
      setOneProducte((prev) => (prev = true));
    }
  }

  return (
    <div className="products">
      {cartItemsList.length ? (
        cartItemsList.map((item) => (
          <div key={item.id} className="product product-one no_highlight">
            <div className={oneProducte && item.amount == 1 ? "inner-layer inner-layer-show" : "inner-layer inner-layer-hide"}>
              <p>удалить товар</p>
              <div className="btn-group">
                <button onClick={(e) => deleteLastProduct(e, item.id)}>Yes</button>
                <button>No</button>
              </div>
            </div>
            <img src={item.productImage} alt="product-img" />
            <div className="description">
              <b>
                <p>{item.productName}</p>
              </b>
              <p>${item.price}</p>
            </div>
            <div className="amount">
              <button
                className="btn-decrease"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  checkIsOne(item.amount);
                  removeFromCart(item.id);
                }}
              >
                -
              </button>
              <span>{item.amount}</span>
              <button
                className="btn-increase"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  addToCart(item.id);
                }}
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart">Корзина пуста</p>
      )}
      {cartItemsList.length > 0 && <p className="total-sum">Общая сумма: {totalAmount}</p>}
    </div>
  );
}

//!1 import { ShopContext } from "../../context/shop-context"; - мы импортируем контекст, который мы создали в родительском компоненте.
//!2 const { cartItems } = React.useContext(ShopContext); - мы используем useContext для получения значения контекста. Из объекта контекста мы извлекаем cartItems.
