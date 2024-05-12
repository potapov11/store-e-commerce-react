import React from 'react';

export function Product(props) {
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
			<button className="addToCartBttn">add to cart</button>
		</div>
	);
}
