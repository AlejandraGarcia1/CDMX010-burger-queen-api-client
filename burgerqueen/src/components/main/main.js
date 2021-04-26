import React from 'react'
import './Main.css';
import Navbar from '../Navbar/Navbar'
import Titulo from '../Titulo/Titulo'
import Menu from '../Menu/Menu';
import Order from '../Orden/Orden';

function Main() {
  return (
    <div>
			<Navbar />
			<Titulo />
      <Menu />
      <Order />
    </div>
  )
};

export default Main;
