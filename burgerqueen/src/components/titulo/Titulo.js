import React from 'react';
import './Titulo.css';

function Titulo (props) {
		
	return(
		<div>
			<div className = "lista">
				<p className = "mesa"> {props.text} </p>
				<select className = "selectTable">
					<option className = "number"> 1 </option>
					<option> 2 </option>
					<option> 3 </option>
					<option> 4 </option>
					<option> 5 </option>
					</select>				
			</div>		
			<div className = "cliente">
				<p className = "nombre" > Nombre del cliente: </p>
				<input type = "text" className = "nombreInput"></input>
			</div>	
			<hr className = "line"></hr> 
		</div>
	)
};

export default Titulo;
