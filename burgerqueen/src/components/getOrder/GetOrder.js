// import React, { useState, useEffect } from 'react';
import React from 'react';

import Navbar from '../navbar/Navbar';
import Titulo from '../titulo/Titulo';
import Menu from '../menu/Menu';
import Card from '../card/Card';
import Orden from '../orden/Orden';
import Footer from '../fotter/Footer';

import './GetOrder.css';

function GetOrder() {
  return (
    <div>			
				<Navbar />		
				<Titulo text="hola"/>				
			<div className = "mainCenter">
				<div className = "mainMenu">
					<Menu />
				</div>
				<div className = "mainCard">
					<Card />
				</div>
			</div>
			<div className = "mainOrden">
				<Orden /> 
			</div>
			<Footer />		     
    </div>
  )
};

export default GetOrder;
