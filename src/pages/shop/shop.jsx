import React, { useEffect, useState } from "react";
import "./shop.css";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
const sortOptionsArr = [
  { value: "plus-sort", text: "сортировать по возрастанию" },
  { value: "minus-sort", text: "сортировать по убыванию" },
];

export function Shop() {
  const [lastSort, setLastSort] = useState("");

  function handleChange(e) {
    setLastSort(e.target.value);

    if (e.target.value === "minus-sort") {
      PRODUCTS.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "plus-sort") {
      PRODUCTS.sort((a, b) => b.price - a.price);
    }
  }

  return (
    <div className="container">
      <div className="shop">
        <div className="shopTitle">
          <h1>Tecno-shop</h1>
        </div>
        <select name="sort" id="sort" onChange={handleChange}>
          {sortOptionsArr.map((item) => (
            <option value={item.value}>{item.text}</option>
          ))}
        </select>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
