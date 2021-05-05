import React from 'react';
import './OrdenCard.css'

export default function OrdenCard(props) {
 return <div className="Card">
      <p className = "orden"> {props.text} </p> 
       <hr className="division"></hr>
       <table className="ordenCompleta">
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
            <td></td>
            <td className="total">Total $22.00</td>
            <td></td>
        </tr>
        
        </table>
        <hr className="segundaDivision"></hr>
 </div>
}