import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

export function Navbar() {
	return (
		<div className="navbar">
			<div className="container">
				<div className="links">
					<Link to="/"> shop </Link>
					<Link to="/cart">
						<ShoppingCart size={40} />
					</Link>
				</div>
			</div>
		</div>
	);
}
