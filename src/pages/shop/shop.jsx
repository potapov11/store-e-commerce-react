import React, { useState, useRef } from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
import { MagnifyingGlass } from "phosphor-react";
import useOnClickOutside from "../../assets/hooks/Hook-clickoutside";
import "./shop.css";
const sortOptionsArr = [
  { value: "plus-sort", text: "сортировать по возрастанию цены" },
  { value: "minus-sort", text: "сортировать по убыванию цены" },
  { value: "rating-sort", text: "сортировать по рейтингу" },
];

export function Shop() {
  // const [lastSort, setLastSort] = useState("");
  const [checkedCheckBox, setCheckedCheckBox] = useState(false);
  const [sortInputValue, setSortInputValue] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownText, setDropdownText] = useState("По умолчанию");
  const [currentProducts, setCurrentProducts] = useState(PRODUCTS);

  const refSort = useRef(null);
  useOnClickOutside(refSort, () => setShowDropDown(false));

  function handleChange(e) {
    if (e.target.textContent === "сортировать по убыванию цены") {
      setCurrentProducts(PRODUCTS.sort((a, b) => a.price - b.price));
    } else if (e.target.textContent === "сортировать по возрастанию цены") {
      setCurrentProducts(PRODUCTS.sort((a, b) => b.price - a.price));
    } else if (e.target.textContent === "сортировать по рейтингу") {
      setCurrentProducts(PRODUCTS.sort((a, b) => b.rating - a.rating));
    }
  }

  function changeDropdOwnText(e) {
    console.log(e.target);
    console.log(e.target.textContent);
    setDropdownText(e.target.textContent);
  }

  function setDateFilteredProducts(e) {
    const dateFilteredProducts = PRODUCTS.filter((item) => item.today === true);
    if (e.target.checked == true) {
      setCurrentProducts(dateFilteredProducts);
      setCheckedCheckBox(!e.target.checked);
    } else {
      setCurrentProducts(PRODUCTS);
    }
  }

  return (
    <div className="container">
      <div className="shop">
        <div className="shopTitle">
          <h1>Tecno-shop</h1>
        </div>
        <div className="product-wrapper">
          <div className="sort-block">
            <div className="sort-inner">
              <div className="input">
                <input placeholder="Найдите нужный товар..." className="sort-input" type="text" value={sortInputValue} onChange={(e) => setSortInput(e)} />
                <MagnifyingGlass size={32} />
              </div>
              <div
                className={showDropDown ? "sort-select _opened" : "sort-select"}
                name="sort"
                id="sort"
                ref={refSort}
                onClick={(e) => {
                  handleChange(e);
                  setShowDropDown(!showDropDown);
                }}
              >
                <span className="sort-span">{dropDownText}</span>
                {sortOptionsArr.map((item) => (
                  <div onClick={(e) => changeDropdOwnText(e)}>{item.text}</div>
                ))}
              </div>
              <label>
                <input
                  type="checkbox"
                  value={checkedCheckBox}
                  onChange={(e) => {
                    // setCheckedCheckBox(e);
                    setDateFilteredProducts(e);
                  }}
                />
              </label>
              Выбрать товары с доставкой сегодня
            </div>
          </div>
          <div className="products">
            {currentProducts.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
