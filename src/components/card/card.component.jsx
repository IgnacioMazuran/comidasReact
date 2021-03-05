import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="producto" src={`public/assets/producto${props.producto.id}.jgp?&size=180x180`}></img>
        <h2>{props.producto.nombre}</h2>
        <p>{props.producto.precio}</p>
    </div>
);
