import Button from "../button/Button";
import "./Orden.css";

function Order(props) {
//   function totalPrecio(precio, contador) {
//     // return parseFloat(precio) * contador
//     let precio = parseInt(props.preOrden.precio);
//     let contador = props.preOrden.contador;
//     console.log('precio', precio)
//     console.log('contador',contador)

//     let total = precio * contador
//     console.log('total de precio', total)
//   }


//   //console.log('precio', props.preOrden.precio, 'contador', props.preOrden.contador);
//  totalPrecio(props.preOrden)
  //console.log(precioCadaProducto);
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
            <td>
              {props.preOrden.map((elemento) => (
                <li> {elemento.contador} </li>
              ))}
            </td>
            <td>
              {props.preOrden.map((elemento) => (
                <li> {elemento.producto} </li>
              ))}
            </td>
            <td>
              {props.preOrden.map(({precio,contador}) => (
                <li > {contador * parseInt(precio)} </li>
              ))}
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
        {/* <tbody> */}
        {/* <tr>
            {props.preOrden.map((elemento)=> 
            <li> {elemento.contador} 
        {/*     {elemento.producto}  */}
        {/* {elemento.precio}</li>
         */}
        {/* ) */}

        {/* }
            {/* {props.preOrden.map((elemento)=>  */}
        {/* <t */}
        {/* //}d>{elemento.producto}</li>
            
          // )

          //   }
          //    {props.preOrden.map((elemento)=>  */}
        {/* //   <td> {elemento.precio}</td>
            
          // )

          //   } */}

        {/* </tr> */}
        {/* <tr>
            <td>2</td>
            <td>Papas</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>refresco 500ml</td>
            <td>7</td>
          </tr> */}
        {/* </tbody> */}
      </table>

      <hr className="segundaDivision"></hr>
      <button className="ordenar">Ordenar</button>
    </div>
  );
}

export default Order;
