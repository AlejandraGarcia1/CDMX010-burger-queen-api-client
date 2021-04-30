import React, {useEffect, useState} from "react";
import "./Menu.css";

function Menu () {
	//Hook que almacena el menu
	const [items, setItems] = useState([]);
	const [desplegar, setDesplegar] = useState(false);
	const desayuno = () => setDesplegar(!desplegar);
	console.log('estatus de desplegar:', desplegar)	

	//Función que ejecuta la petición
	useEffect(() => {
		obtenerDatos()
	}, [])

	//función que solicita el menu
	const obtenerDatos = async () => {		
		const data = await fetch('https://api.sheety.co/9c52546974faa807ce11d555f82049e5/theBurgerLover/productos')
		console.log('soy la peticion', data)
		console.log('estatus', data.status)

		// Guardamos la respuesta en formato JSON - Es await porque tambien esperamos esta respuesta	
		const dataJson = await data.json()
		setItems(dataJson)
		console.log('data Json', dataJson)
	}

	// -----------------------------------------------

	// const url = 'https://api.sheety.co/9c52546974faa807ce11d555f82049e5/theBurgerLover/productos'

	// // Hook que almacena el menu
	// const [menu, setMenu] = useState()

	// //Función que solicita el menu
	// const fetchApi = async () => {
	// 	const response = await fetch(url)
	// 	console.log(response.status)
	// 	// Guardamos la respuesta en formato JSON - Es await porque tambien esperamos esta respuesta
	// 	const responseJson = await response.json()
	// 	setMenu(responseJson)
	// 	console.log('aqui', responseJson)
	// }

	// //Hook que ejecuta la función de la petición
	// useEffect(() => {
	// 	fetchApi()
	// }, [])

	// ----------------------------------------------------

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
        
        <p className = "category">
          Comidas y cenas <i class="fas fa-angle-down"></i>
        </p>

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
      </div>

				{/* <ul>
					{
							items.map(item => (							
							<li key="item.id"> {item.producto} </li>
						))						
					}					
				</ul> */}

				{/* <ul>
					{ !menu ? 'Cargando menu' : menu.map ((menu ,index) => {
						return <li>{menu.tipo}</li>
					}) }
				</ul> */}

    </section>
  )
};

export default Menu;