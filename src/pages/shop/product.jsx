import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export function Product(props) {
	const { addToCart, cartItems } = useContext(ShopContext);

	const { data } = props;
	const { id, productName, price, productImage } = data;

	return (
		<div className="product">
			<img src={productImage} alt="product-img" />
			<div className="description">
				<b>
					<p>{productName}</p>
				</b>
				<p>${price}</p>
			</div>
			<button className="addToCartBttn" onClick={() => addToCart(id)}>
				add to cart {cartItems[id] > 0 && cartItems[id]}
			</button>
		</div>
	);
}
