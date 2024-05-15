import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import "./navbar.css";

export function Navbar() {
  const { cartItems } = useContext(ShopContext);

  console.log(cartItems, "..cartItems..");

  let res = Object.values(cartItems).reduce((aсс, item) => aсс + item, 0);

  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
          <Link to="/"> shop </Link>
          <Link to="/cart">
            <ShoppingCart size={40} />
          </Link>
          {res > 0 && <span className="product-count">{res}</span>}
        </div>
      </div>
    </div>
  );
}
