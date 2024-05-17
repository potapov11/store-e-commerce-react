import React from "react";
import "./shop.css";
import { PRODUCTS } from "../../product";
import { Product } from "./product";

export function Shop() {
  return (
    <div className="container">
      <div className="shop">
        <div className="shopTitle">
          <h1>Tecno-shop</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
