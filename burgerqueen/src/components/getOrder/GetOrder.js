import React, { useState, useEffect } from "react";

import Navbar from "../navbar/Navbar";
import Titulo from "../titulo/Titulo";
import Menu from "../menu/Menu";
import Card from "../card/Card";
import Orden from "../orden/Orden";
import Footer from "../fotter/Footer";

import "./GetOrder.css";

function GetOrder() {
  const [items, setItems] = useState([]);
  const [desayunos, setDesayunos] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  //Función que ejecuta la petición
  useEffect(() => {
    obtenerDatos();
  }, []);
  //Función que solicita el menu
  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:3000/menu");
    console.log("soy la petición", data);
    console.log("estatus", data.status);
    //Guardamos la respuesta en formato JSON - es await porque esperamos la respuesta
    const dataJson = await data.json();
    setItems(dataJson);
    setDesayunos(dataJson.filter((elemento) => elemento.tipo === "Desayuno"));
    // console.log('data json', dataJson)
  };
  

  function showDataEnCards(productId) {
    console.log(productId);
    const newCurrentProduct = items.find(({ id }) => id === productId);
    console.log((newCurrentProduct));
    setCurrentProduct(newCurrentProduct);
  }
  //const card=(e)=>console.log( filters.find((({producto}))=> producto) , 'targert', e.target , filters.findIndex( ));

  return (
    <div>
      <Navbar />
      <Titulo text="N° de Mesa" />

      <div className="mainCenter">
        <div className="mainMenu">
          <Menu dataDesayuno={desayunos} showDataEnCards={showDataEnCards} />
        </div>
        <div className="mainCard">
          {!!currentProduct && <Card currentProduct={currentProduct} />}
        </div>
      </div>

      <div className="mainOrden">
        <Orden />
      </div>

      <Footer />
    </div>
  );
}

export default GetOrder;
