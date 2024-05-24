import React, { useContext, useState, useEffect } from "react";
import star from "../../assets/img/star.svg";
import { ShopContext } from "../../context/shop-context";

export function Product(props) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [countStars, setCountStars] = useState([]);

  const { data } = props;
  const { id, productName, price, productImage, rating } = data;

  useEffect(() => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    setCountStars(stars);
  }, [rating]);

  return (
    <div className="product no_highlight">
      <img src={productImage} alt="product-img" />
      <div className="description">
        <b>
          <p>{productName}</p>
        </b>
        <div className="product-info">
          <p>${price}</p>
          <div className="product__rating">
            {countStars.map((item) => {
              return <span className="product__star"></span>;
            })}
          </div>
        </div>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        add to cart {cartItems[id] > 0 && cartItems[id]}
      </button>
    </div>
  );
}
