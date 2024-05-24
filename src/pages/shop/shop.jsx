import React, { useEffect, useState } from "react";
import "./shop.css";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
const sortOptionsArr = [
  { value: "plus-sort", text: "сортировать по возрастанию цены" },
  { value: "minus-sort", text: "сортировать по убыванию цены" },
  { value: "rating-sort", text: "сортировать по рейтингу" },
];

export function Shop() {
  const [lastSort, setLastSort] = useState("");
  const [sortInputValue, setSortInputValue] = useState("");

  function handleChange(e) {
    setLastSort(e.target.value);

    if (e.target.value === "minus-sort") {
      PRODUCTS.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "plus-sort") {
      PRODUCTS.sort((a, b) => b.price - a.price);
    } else if (e.target.value === "rating-sort") {
      PRODUCTS.sort((a, b) => b.rating - a.rating);
    }
  }

  function setSortInput(e) {
    setSortInputValue(e.target.value);
  }

  const filteredProducts = PRODUCTS.filter((item) => item.productName.toLowerCase().includes(sortInputValue.toLowerCase()));

  return (
    <div className="container">
      <div className="shop">
        <div className="shopTitle">
          <h1>Tecno-shop</h1>
        </div>
        <div className="product-wrapper">
          <div className="sort-block">
            <div className="sort-inner">
              <select className="sort-select" name="sort" id="sort" onChange={handleChange}>
                {sortOptionsArr.map((item) => (
                  <option value={item.value}>{item.text}</option>
                ))}
              </select>
              <input placeholder="Найдите нужный товар..." className="sort-input" type="text" value={sortInputValue} onChange={(e) => setSortInput(e)} />
            </div>
          </div>
          <div className="products">
            {filteredProducts.length > 0 ? filteredProducts.map((product) => <Product key={product.id} data={product} />) : PRODUCTS.map((product) => <Product key={product.id} data={product} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
