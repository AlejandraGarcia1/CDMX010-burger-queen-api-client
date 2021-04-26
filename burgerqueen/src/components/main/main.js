import React from 'react';
import './Main.css';
import Navbar from '../navbar/Navbar';
import Titulo from '../titulo/Titulo';
import Menu from '../menu/Menu';
import Card from '../card/Card';
import Orden from '../orden/Orden';

function Main() {
  return (
    <div>
			<Navbar />
			<Titulo />
			<Menu />
			<Card />
			<Orden />
      <h1>Hola</h1>
    </div>
  )
};

export default Main;
