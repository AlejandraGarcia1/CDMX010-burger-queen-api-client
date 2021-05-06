import React, { useState } from "react";
import "./Menu.css";

function Menu({ dataDesayuno, showDataEnCards, dataHamburguesas, dataAcompañamientos, dataBebidas }) {
	
  const [desplegarDesayuno, setDesplegarDesayuno] = useState(false);
  const desayuno = () => setDesplegarDesayuno(!desplegarDesayuno);
  const [desplegarComida, setDesplegarComida] = useState(false);
  const comida = () => setDesplegarComida(!desplegarComida);

  console.log("estatus de desplegar:", desplegarDesayuno);

  return (
    <div>
      <section className="menus">
        <p className="menu"> Menú </p>
        <div className="desayunos">
          <p onClick={desayuno}>
            Desayunos <i className="fas fa-angle-down"></i>
          </p>
          {desplegarDesayuno && (
            <ul className="desayuno" id="menu">
              {dataDesayuno.map(({ id, producto }) => (
                <li key={id} onClick={() => showDataEnCards(id)}>
                  {producto}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="comidas">
          <p onClick={comida} className="category">
            Comidas y cenas <i className="fas fa-angle-down"></i>
          </p>
          {desplegarComida && (
            <div className="comida" id="menuDos">
              <p className="subcategory"> Hamburguesas </p>
              <ul>
								{dataHamburguesas.map(({id, producto}) => (
									<li key={id} onClick={() => showDataEnCards(id) }>
										{producto}
									</li>
								))}                
              </ul>
              <p className="subcategory"> Acompañamientos </p>
              <ul>
								{dataAcompañamientos.map(({id, producto}) => (
									<li key={id} onClick={() => showDataEnCards(id)}>
										{producto}
									</li>
								))}
                <li></li>
              </ul>
              <p className="subcategory"> Para tomar </p>
              <ul>
								{dataBebidas.map(({id, producto}) => (
									<li key={id} onClick={() => showDataEnCards(id)}>
										{producto}
									</li>
								))}
                <li></li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Menu;
