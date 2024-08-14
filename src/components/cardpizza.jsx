import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/css/cardpizza.css';


export default function CardPizza({ pizza }) {
    return (
        <div className='d-flex justify-content-center pizzacard'>
            <Card className='bg-white col'>
                <Card.Img className='p-1' variant="top" src={pizza.img} />
                <Card.Body>
                    <Card.Title><h3>Pizza {pizza.name}</h3></Card.Title>
                    <Card.Text>
                        <h5 className='text-secondary mb-2'>Ingredientes:</h5>
                        <ul className='text-center'>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}> {ingredient}</li>
                            ))}
                        </ul>
                        
                        <p><strong>Precio: ${pizza.price}</strong></p>
                    </Card.Text>
                    <div className='d-flex justify-content-evenly'>
                        <Button variant="light">Ver más 👀</Button>
                        <Button variant="dark">Añadir 🛒</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}