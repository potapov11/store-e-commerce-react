import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";
import { PRODUCTS } from "../../product";

export function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const cartItemsList = PRODUCTS.filter((product) => {
    if (cartItems[product.id] > 0) {
      product.amount = cartItems[product.id];
      return product;
    }
    return null;
  });

  return (
    <div className="products">
      {cartItemsList.length ? (
        cartItemsList.map((item) => (
          <div key={item.id} className="product">
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
                onClick={() => removeFromCart(item.id)}
              >
                -
              </button>
              <span>{item.amount}</span>
              <button
                className="btn-increase"
                style={{ marginLeft: "10px" }}
                onClick={() => addToCart(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Корзина пуста</p>
      )}
    </div>
  );
}

//!1 import { ShopContext } from "../../context/shop-context"; - мы импортируем контекст, который мы создали в родительском компоненте.
//!2 const { cartItems } = React.useContext(ShopContext); - мы используем useContext для получения значения контекста. Из объекта контекста мы извлекаем cartItems.
