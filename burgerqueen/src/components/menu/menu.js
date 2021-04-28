import React, {useState} from "react";
import "./Menu.css";

function Menu () {
	//{ breakfast }
	// -------------------

	const [desplegar, setDesplegar] = useState(false);
	const desayuno = () => setDesplegar(!desplegar);
	console.log(desplegar)	

  return (
    <section className = "menus">
      <p className = "menu"> Menú </p>
      <div className = "desayunos">
				
        <p onClick = { desayuno }>					
          Desayunos <i class="fas fa-angle-down"></i>
        </p>				
        <ul desplegar = { desplegar } className="desayuno" id="menu">
          <li> Café americano </li>
          <li> Café con leche </li>
          <li> Sandwich de jamón y queso </li>
          <li> Jugo de frutas natural </li>
        </ul>
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

    </section>
  )
};

export default Menu;