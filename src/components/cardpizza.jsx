import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/button'
import '../assets/css/cardpizza.css'

export default function CardPizza(props) {

    const ingredientsList = props.ingredients.join(', ')


    return (
        <div className='d-flex justify-content-center'>
            <Card className='bg-white'>

                <Card.Img className='p-1' variant="top" src={props.img} />

                <Card.Body>

                    <Card.Title><h3>Pizza {props.name}</h3></Card.Title>

                    <Card.Text>
                        <h5 className='text-secondary mb-2'>Ingredientes:</h5>

                        <p>🍕 {ingredientsList}</p>

                    </Card.Text>

                    <div className='d-flex justify-content-evenly'>

                        <Button variant="light">ver mas 👀</Button>
                        <Button variant="dark">añadir 🛒</Button>

                    </div>

                </Card.Body>

            </Card>

        </div>




    );
}
