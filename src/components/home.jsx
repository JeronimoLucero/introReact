import React from 'react'
import Header from './header'
import CardPizza from './cardpizza.jsx'
import { pizzas } from '../assets/js/pizzas.js';


export default function home() {
  return ( 

    
    

    <div>
      <Header></Header>

      <div className='d-flex justify-content-around'>

        <div className='container'>

        <div className='pizza-list row'>
            {pizzas.map(pizza => (
                <CardPizza key={pizza.id} pizza={pizza} />
            ))}
        </div>
          
        </div>
      
  
     
  
    </div>
    </div> 





  )
};
