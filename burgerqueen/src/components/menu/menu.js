import React from "react";
import "./Menu.css";

function Menu () {
	// Función para desplegar el menú 
  function desplegar () {    
    let menu = document.getElementById("menu");
    menu.classList.toggle("desayuno");    
  }

  function desplegarComida() {
    let menuDos = document.getElementById("menuDos");
    menuDos.classList.toggle("comida");
  }

  return (
    <section className="menus">
      <h2>Menú</h2>
      <div className="desayunos">
        <h3 onClick={desplegar}>
          Desayunos <i class="fas fa-angle-down"></i>
        </h3>
        <ul className="desayuno" id="menu">
          <li>Café americano </li>
          <li>Café con leche</li>
          <li>Sandwich de jamón y queso</li>
          <li>Jugo de frutas natural</li>
        </ul>
      </div >
      <div className="comidas">
        
        <h3 onClick={desplegarComida}>
          Comidas y cenas <i class="fas fa-angle-down"></i>
        </h3>
        <div className="comida" id="menuDos">
        <p>Hamburguesas</p>
        <ul>
          <li>Hamburguesas simples</li>
          <li>Hamburguesa doble</li>
        </ul>
        <p>Acompañamientos</p>
        <ul>
          <li>Papas fritas</li>
          <li>Aros de cebolla</li>
        </ul>
        <p> Para tomar </p>
        <ul>
          <li>Agua 500ml</li>
          <li>Agua 750ml</li>
          <li>Bebida/Gaseosa 500ml</li>
          <li>Bebida/Gaseosa 710ml</li>
        </ul>
        </div>
      </div>
    </section>
  )
};

export default Menu;