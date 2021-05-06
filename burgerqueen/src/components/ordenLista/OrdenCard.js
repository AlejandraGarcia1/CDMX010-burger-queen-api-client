import React from 'react';
import './OrdenCard.css'

export default function OrdenCard(props) {
 return <div className="Card">
      <p className = "orden"> {props.text} </p> 
			<p> {props.cliente} </p>
       <hr className="division"></hr>
       <table className="ordenCompleta">
           <tbody>
        <tr>
            <td>Hamburguesa doble</td>
            <td>$15</td>
            
        </tr>
        <tr>
            <td>Papas</td>
            <td>$7</td>
            
        </tr>
        <tr>
            <td>Agua</td>
            <td>$5</td>
           
        </tr>
        <tr>
            <thead className="total">Total $22.00</thead>
            
        </tr>
        </tbody>
        </table>
        <hr className="segundaDivision"></hr>
 </div>
}