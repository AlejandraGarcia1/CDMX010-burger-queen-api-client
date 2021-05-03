// import React, { useState, useEffect } from 'react';
import React from "react";

import Navbar from "../navbar/Navbar";
import Titulo from "../titulo/Titulo";
import Menu from "../menu/Menu";
import Card from "../card/Card";
import Orden from "../orden/Orden";
import Footer from "../fotter/Footer";

import "./GetOrder.css";

//MockAPI Shety
// let url = 'https://api.sheety.co/9c52546974faa807ce11d555f82049e5/theBurgerLover/productos';
// 		fetch(url)
// 		.then((response) => response.json())
// 		.then(json => {
// 			// Do something with the data
// 			console.log(json.productos);
// 	});

function GetOrder() {
  // const [breakfast, setBreakfast] = useState({});

  // useEffect(() => {
  // 	fetch('http://loqusea.com')
  // 	.then((response) => setBreakfast(response))
  // }, [])

  return (
    <div>
      <Navbar />
      <Titulo />

      <div className="mainCenter">
        <div className="mainMenu">
          <Menu />
        </div>
        <div className="mainCard">
          <Card />
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
