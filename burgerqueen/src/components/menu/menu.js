import React, { useEffect, useState } from "react";
import "./Menu.css";

function Menu () {
	// Hook que almacena el menu	
	const [items, setItems] = useState([])

	const [desplegarDesayuno, setDesplegarDesayuno] = useState(false);
	const desayuno = () => setDesplegarDesayuno(!desplegarDesayuno);
	const [desplegarComida, setDesplegarComida] = useState(false);
	const comida = () => setDesplegarComida(!desplegarComida);
	
	console.log('estatus de desplegar:', desplegarDesayuno)	

	//Función que ejecuta la petición
	useEffect(() => {
		obtenerDatos()
	}, [])

	//Función que solicita el menu
	const obtenerDatos = async () => {
		const data = await fetch('http://localhost:3000/menu')
		console.log('soy la petición', data)
		console.log('estatus', data.status)

		//Guardamos la respuesta en formato JSON - es await porque esperamos la respuesta
		const dataJson = await data.json()
		setItems(dataJson)	
		console.log('data json', dataJson)
	}

  return (
    <section className="menus">
      <p className="menu"> Menú </p>
      <div className="desayunos">
        <p onClick={desayuno}>
          Desayunos <i class="fas fa-angle-down"></i>
        </p>				
				{desplegarDesayuno &&
					<ul className="desayuno" id="menu">
           { items.filter((elemento)=> elemento.tipo === "Desayuno").map((item, key) => 
           <li key={item.id}></li>)
					 }          
					</ul>			
				}				
      </div >

      <div className = "comidas">        
        <p onClick = { comida } className = "category">
          Comidas y cenas <i class="fas fa-angle-down"></i>
        </p>
				{desplegarComida &&
					<div className = "comida" id="menuDos">
									<p className = "subcategory"> Hamburguesas </p>
									<ul>
									{ items.filter((elemento)=> elemento.tipo === "Hamburguesa").map((item, key) => 
           				<li key={key}>{item.producto}</li>)
									 } 
									</ul>
									<p className = "subcategory"> Acompañamientos </p>
									<ul>
									{ items.filter((elemento)=> elemento.tipo === "Acompañamiento").map((item, key) => 
           				<li key={key}>{item.producto}</li>)
									 } 						
									</ul>
									<p className = "subcategory"> Para tomar </p>				
									<ul>
									{ items.filter((elemento)=> elemento.tipo === "Bebidas").map((item, key) => 
           				<li key={key}>{item.producto}</li>)
									 }										
									</ul>
					</div>		
				}
			</div>
    </section>
  );
}

export default Menu;
