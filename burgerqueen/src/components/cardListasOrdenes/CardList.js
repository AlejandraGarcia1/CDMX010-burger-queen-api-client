import React from 'react';
import './CardList.css';

export default function CardList(props) {
  return <div className="lista-de-ordenes">
      <div className="card">
          <h3>{props.text}</h3>
      </div>
  </div>  
}