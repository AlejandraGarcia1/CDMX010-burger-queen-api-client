import React from 'react';
import Button from '../button/Button';
import './OrderProcess.css'

function OrderProces(props) {
    return  <div className="orderProces">
        <div className="time">
            Hora
        </div>
        <div className="name-mesa" >
            <h3>{props.text}</h3>
            <hr></hr>
        </div>
        <div>
        <input type="checkbox" />{props.pedido}
        </div>
        {/* <div>
        <input type="checkbox" /> Papas
        </div> */}
        <Button text="Orden lista" />
    </div>
}

export default OrderProces;