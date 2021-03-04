import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';
export const CardList = props => (
    <div className='card-list'>
        {
            props.productos.map(producto => (
                <Card key={producto.id} producto={producto} />))
        }
    </div>
);