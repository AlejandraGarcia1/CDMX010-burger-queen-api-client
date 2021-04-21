import React from 'react';
import './Navbar.css';

function Navbar() {
	return (
		<div className="menu">
			<ul>
				<li> Logo </li>
				<li> Mesas </li>
				<li> Ordenes en proceso </li>
				<li> Ordenes listas </li>
				<li> Salir </li>
			</ul>
		</div>
	)
}

export default Navbar;