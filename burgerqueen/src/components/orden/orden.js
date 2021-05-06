import Button from "../button/Button";
import "./Orden.css";

function Order() {
  return (
    <div className="order">
      <p className="orden"> Orden </p>

      <hr className="division"></hr>
      <table className="ordenCompleta">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td>20</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>1</td>
            <td>hamburguesa doble</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Papas</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>refresco 500ml</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>

      <hr className="segundaDivision"></hr>
      <button className="ordenar">Ordenar</button>
    </div>
  );
}

export default Order;
