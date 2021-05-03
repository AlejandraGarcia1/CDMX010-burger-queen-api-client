import React, {useEffect, useState} from "react";
import "./Menu.css";

function Menu () {
	// Hook que almacena el menu	
	const [items, setItems] = useState([])

	const [desplegar, setDesplegar] = useState(false);
	const desayuno = () => setDesplegar(!desplegar);
	const comida = () => setDesplegar(!desplegar);
	console.log('estatus de desplegar:', desplegar)	

	//Función que ejecuta la petición
	useEffect(() => {
		obtenerDatos()
	})

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
    <section className = "menus">
      <p className = "menu"> Menú </p>
      <div className = "desayunos">
				
        <p onClick = { desayuno }>					
          Desayunos <i class="fas fa-angle-down"></i>
        </p>
				{desplegar &&
					<ul className="desayuno" id="menu">
						<li> Café americano </li>
						<li> Café con leche </li>
						<li> Sandwich de jamón y queso </li>
						<li> Jugo de frutas natural </li>
					</ul>			
				}
      </div >

      <div className = "comidas">
        
        <p onClick = { comida } className = "category">
          Comidas y cenas <i class="fas fa-angle-down"></i>
        </p>
				{desplegar &&
					<div className = "comida" id="menuDos">

									<p className = "subcategory"> Hamburguesas </p>

									<ul>
										<li> Hamburguesas simples </li>
										<li> Hamburguesa doble </li>
									</ul>

									<p className = "subcategory"> Acompañamientos </p>
									<ul>
										<li> Papas fritas </li>
										<li> Aros de cebolla </li>
									</ul>

									<p className = "subcategory"> Para tomar </p>				
									<ul>
										<li> Agua 500ml </li>
										<li> Agua 750ml </li>
										<li> Bebida/Gaseosa 500ml </li>
										<li> Bebida/Gaseosa 710ml </li>
									</ul>
									</div>				
								
				}
				</div>
			
				{/* <ul>
					{
							items.map(item => (							
							<li key="item.id"> {item.producto} </li>
						))						
					}					
				</ul> */}
        

    </section>
  )
};

export default Menu;