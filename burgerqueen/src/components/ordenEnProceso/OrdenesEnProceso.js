import React from 'react';
import OrderProces from '../orden-en-proceso/OrderProcess';
import Title from '../title/Title';
import Navbar from '../navbar/Navbar';
import './OrdenesEnProceso.css'
import Footer from '../fotter/Footer';

export default function OrdenesEnProceso (){
    return(
        <div className="pag-two">
            <Navbar />
            <Title  text ="En preparacion"/>
            <div className="orden-en-preparacion">
            <OrderProces text= "Mesa No. 1" />
            <OrderProces text= "Mesa No. 2" pedido= "Papas, Hamburgesa simple, refesco"/>
            <OrderProces text= "Mesa No. 3" pedido= "Café con leche, Hamburegesa simple"/>
            <OrderProces text= "Mesa No. 4"  pedido= "Jugo de frutas natural, Sandwich de jamón y queso	"/>
            <OrderProces text= "Mesa No. 5"  pedido= "Café con leche" />
            <OrderProces text= "Mesa No. 5"  pedido= "Aros de cebolla, Hamburgesa simple"/>
            </div>
            <Footer />
            
        </div>
    )
}