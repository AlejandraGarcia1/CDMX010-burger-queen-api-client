import React, {useState} from 'react';
import './Card.css';
import hamburguesa from '../../images/hamburpng.png';
import derecha from '../../images/derecha.png';
import izquierda from '../../images/izquierda.png';

function Card () {
	const [contador, setContador] = useState(0);
	const sumar = () => setContador(contador + 1);
	const restar = () => setContador(contador !== 0 ? contador -1 : contador)

	return (
		<section>
		<div className = "backgroundCard">
			<div>
				<p className = "titulo">Hamburguesa doble $15</p>
				<hr className = "lineCard"></hr>
			</div>
			<div>				
			</div>
			<img src = { hamburguesa } alt = "hamburguesa" className = "hamburguesa"/>
			<div className = "ingredients">
			<div className = "listCard">
				<div className = "cardMenu">
					<p> Ingredientes: </p>
					<ul>
						<li> Carne de res </li>
						<li> Jitomate </li>
						<li> Lechuga </li>
						<li> Cebolla </li>						
					</ul>
				</div>
			</div>
			<div className = "counter">					
						<img onClick = { restar } src = { izquierda } alt = "izquierda" className = "izquierda"/>
						<div className = "number"> { contador } </div>
						<img onClick = { sumar } src = { derecha } alt = "derecha" className = "derecha"/>				
			</div>
			</div>
		</div>
		<div>
			<button className = "cardButton"> Agregar </button>
		</div>
		</section>
	)

};

export default Card;