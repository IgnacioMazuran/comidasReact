import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="producto" src={process.env.PUBLIC_URL + `/assets/producto${props.producto.id}.JPG?&size=180x180`}></img>
        <h2>{props.producto.nombre}</h2>
        <p>{props.producto.precio}</p>
    </div>
);
