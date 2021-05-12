import './Card.css';
import derecha from '../../images/derecha.png';
import izquierda from '../../images/izquierda.png';

function Card ({currentProduct, sumar, restar, contador}) {	
	console.log(currentProduct);
	
	const {producto, precio, imagen, ingredientes} = currentProduct

	return (
		<section>
		<div className = "backgroundCard">
			<div>
				<p className = "titulo">{producto} ${precio}</p>
				<hr className = "lineCard"></hr>
			</div>
			<div>				
			</div>
			<img src = { imagen } alt = "hamburguesa" className = "hamburguesa"/>
			<div className = "ingredients">
			<div className = "listCard">
				<div className = "cardMenu">
					<p> Ingredientes: </p>
					<ul>
					{ingredientes.map((elemento) => <li>{elemento}</li> )}												
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