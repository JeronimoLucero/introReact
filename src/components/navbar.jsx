import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faLock, faLockOpen, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const total = 25000;
const Token = false;

export default function navbar() {
    return (
        <Navbar bg="dark" className='p-1' >

            <Nav className='d-flex'>
                <Container className="d-flex justify-content-between">

                    <div>
                    <Navbar.Brand href="#home">
                        <Button variant="outline-light">Pizzería Mamma mia!</Button>
                    </Navbar.Brand>
                    <Button variant="outline-light" className='me-1'>
                        <FontAwesomeIcon icon={faPizzaSlice} /> Home
                    </Button>
                    <Button variant="outline-light" className='me-1'>
                        <FontAwesomeIcon icon={Token ? faLock : faLockOpen} />
                        {Token ? " Login" : " Profile"}
                    </Button>
                    <Button variant="outline-light" className='me-1'>
                        <FontAwesomeIcon icon={Token ? faLock : faLockOpen} />
                        {Token ? " Register" : " Logout"}
                    </Button>


                    </div>

                    <div>
                        
                    <Button variant="primary" className='flex-end'>
                        <FontAwesomeIcon icon={faShoppingCart} /> Total: {total.toLocaleString()}
                    </Button>

                        
                    </div>


                    






                </Container>

            </Nav>

        </Navbar>
    );
}