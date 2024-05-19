import React, { useState, createContext } from 'react';
import { PRODUCTS } from '../product';

export const ShopContext = createContext(null);

//!props.children в данном случае представляет собой дочерние компоненты, которые будут обернуты в ShopContext.Provider и получат доступ к контексту, определенному в ShopContext.
//!<ShopContextProvider>
//!<MyApp />
//!</ShopContextProvider

console.log(PRODUCTS.length);

const defaultCart = () => {
	let cart = {};
	for (let i = 1; i <= PRODUCTS.length; i++) {
		cart[i] = 0;
	}
	return cart;
};

export function ShopContextProvider(props) {
	const getInitialCart = () => {
		try {
			const dataFromLs = JSON.parse(localStorage.getItem('produtcsLS'));
			if (dataFromLs) return dataFromLs;
		} catch (e) {
			console.log(`no exists data in ls ${e.message} `);
		}

		return defaultCart();
	};

	const [cartItems, setCartItems] = useState(getInitialCart());
	// );

	const [oneProducte, setOneProducte] = useState(false);

	const addToCart = (itemId) => {
		setCartItems((prev) => {
			const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
			localStorage.setItem('produtcsLS', JSON.stringify(updatedCart));
			return updatedCart;
		});
	};

	function deleteLastProduct(e, id) {
		if (e.target.textContent == 'Yes') {
			removeFromCart(id);
		}
	}

	const removeFromCart = (itemId) => {
		setCartItems((prev) => {
			// if (prev[itemId] !== undefined) {
			if (!oneProducte) {
				console.log('if-here');
				localStorage.setItem('produtcsLS', JSON.stringify({ ...prev, [itemId]: prev[itemId] - 1 == 0 ? 1 : prev[itemId] - 1 }));
				return { ...prev, [itemId]: prev[itemId] - 1 == 0 ? 1 : prev[itemId] - 1 };
			} else {
				localStorage.setItem('produtcsLS', JSON.stringify({ ...prev, [itemId]: prev[itemId] - 1 }));
				return { ...prev, [itemId]: prev[itemId] - 1 };
			}
		});
	};

	//!Новое состояние корзины создается с помощью оператора распространения ({...prev}) - это копирует все существующие свойства предыдущего состояния корзины.
	//!Затем, для элемента с идентификатором itemId, значение этого элемента увеличивается на 1. Это делается с помощью синтаксиса вычисляемых свойств [itemId], который позволяет динамически обращаться к свойству объекта по значению переменной itemId.

	const contextValue = { cartItems, addToCart, removeFromCart, oneProducte, deleteLastProduct, setOneProducte };

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}
