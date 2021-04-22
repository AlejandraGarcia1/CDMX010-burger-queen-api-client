import React from 'react';
import './Main.css';
import Navbar from '../navbar/Navbar';
import Titulo from '../titulo/Titulo';
import Menu from '../menu/Menu';

function Main() {
  return (
    <div>
			<Navbar />
			<Titulo />
			<Menu />
      <h1>Hola</h1>
    </div>
  )
};

export default Main;
