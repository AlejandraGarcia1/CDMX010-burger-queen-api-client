import React from 'react';

import './OrdenesListas.css'
import Button from '../button/Button';
import CardList from '../cardListasOrdenes/CardList';
import Footer from '../fotter/Footer';
import Navbar from '../navbar/Navbar';
import OrdenCard from '../ordenLista/OrdenCard';
import Title from '../title/Title';

export default function OrdenesListas(){
    return <div>
       
        <Navbar />
        <div className="pages-tres">
        < Title text="Ordenes a entregar" />
        <OrdenCard text="Mesa No. 1" cliente="Nombre del cliente: Andrea Lopez"/>
        <Button text="Entregado"/>
        <Title text= "Ordenes Listas" />
        <div className="list">
        <CardList text="Mesa No. 1" />
        <CardList text="Mesa No. 2" />
        <CardList text="Mesa No. 3" />
        <CardList text="Mesa No. 4" />
        </div>
        
        </div>
       
        <Footer/>
    </div>
}