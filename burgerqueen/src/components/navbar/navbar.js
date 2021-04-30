import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
import salir from '../../images/salir.png';
import {  
  Link
} from "react-router-dom";

function Navbar () {
	return (	
		<header>
		<div className = "logo">
			<img src = { logo } alt = "burgerLover" className = "burger"/>
		</div>

		<div className = "nav">
			<ul>
				<li><Link to="/" className = "navMenu">Mesas</Link></li>
				<li><Link to="/ordenLista" className = "navMenu">Ordenes en proceso </Link></li>
				<li><a href= ".." className = "navMenu"> Ordenes listas </a></li>
				<li><a href= ".." ><img src = { salir } alt = "salir" className = "salirApp"/> </a></li>			
			</ul>		
		</div>
		</header>
	)
};

export default Navbar;