import React, { useState, useEffect } from "react";
import "./GetOrder.css";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import Card from "../card/Card";
import Orden from "../orden/Orden";
import Footer from "../fotter/Footer";

function GetOrder() {
  const [items, setItems] = useState([]);
  const [desayunos, setDesayunos] = useState([]);
	const [hamburguesas, setHamburguesas] = useState([]);
	const [acompañamientos, setAcompañamientos] = useState([]);
	const [bebidas, setBebidas] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
	const [mesa, setMesa] = useState('');	
		const [name, setName] = useState('')
	const [contador, setContador] = useState(0);


	function sumar () {
		setContador(contador +1);
	};
	function restar () {
		setContador(contador !== 0 ? contador -1 : contador);
	};

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
		setHamburguesas(dataJson.filter((elemento) => elemento.tipo === "Hamburguesa"));
		setAcompañamientos(dataJson.filter((elemento) => elemento.tipo === "Acompañamiento"));
		setBebidas(dataJson.filter((elemento) => elemento.tipo === "Bebidas"));
  };

  function showDataEnCards(productId) {
    console.log(productId);
    const newCurrentProduct = items.find(({ id }) => id === productId);
    console.log((newCurrentProduct));
    setCurrentProduct(newCurrentProduct);	
  } 

	//Esta función define el título de la primera hoja
	function getNumMesa(e) {
		const numeroDeMesa = e.target.value;
		setMesa(numeroDeMesa);
		console.log('numero de mesa', numeroDeMesa);
	 }
	
	function getName(event){		
		// console.log('nombre del usuario', e.target.value)
		setName(event.target.value)
		console.log('soy name',name)
		
		// console.log('nombre', setName(e.target.value))
		// console.log('aqui', name)
	}
	
	function Titulo () {	
	return(
		<div>
			<div className = "lista">
				<p className = "mesa"> N° de mesa </p>
				<select className = "selectTable" onChange= {getNumMesa} >
					<option value = "0" className = "number">   </option>
					<option value = "1" className = "number"> 1 </option>
					<option value = "2" className = "number"> 2 </option>
					<option value = "3" className = "number"> 3 </option>
					<option value = "4" className = "number"> 4 </option>
					<option value = "5" className = "number"> 5 </option>
					</select>				
			</div>		
			<div className = "cliente">
				<p className = "nombre"> Nombre del cliente: </p>
				<input type = "text" className = "nombreInput" value={name} onChange={getName}></input>
			</div>	
			<hr className = "line"></hr> 
		</div>
	)
};


  return (
    <div>
      <Navbar /> 
			{mesa} 
			{name}    
      <Titulo />
      <div className="mainCenter">
        <div className="mainMenu">
          <Menu dataDesayuno={desayunos} showDataEnCards={showDataEnCards}
					 dataHamburguesas={hamburguesas} dataAcompañamientos={acompañamientos} dataBebidas={bebidas} />
        </div>
        <div className="mainCard">
          {!!currentProduct && <Card currentProduct={currentProduct} sumar={sumar} restar={restar}
					 contador={contador} />}
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
