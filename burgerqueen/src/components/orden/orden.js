import Button from '../button/Button'
import './Orden.css'

function Order(){
    return(
			<div className = "order">
        <p className = "orden"> Orden </p>
       <hr className="division"></hr>
       <table className="ordenCompleta">
        <tr>
            <td>Hamburguesa doble</td>
            <td>$15</td>
            <td><button>Eliminar</button></td>
        </tr>
        <tr>
            <td>Papas</td>
            <td>$7</td>
            <td><button>Eliminar</button></td>
        </tr>
        <tr>
            <td>Agua</td>
            <td>$5</td>
            <td><button>Eliminar</button></td>
        </tr>
        <tr>
            <td></td>
            <td className="total">Total $22.00</td>
            <td></td>
        </tr>
        
        </table>
        <hr className="segundaDivision"></hr>
        <button className="ordenar">Ordenar</button>
    </div>
		)
} 

export default Order;

