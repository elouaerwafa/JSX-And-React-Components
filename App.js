import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';
import './wa.css';
import Product from './Product';
const firstName = prompt("type your first name");

function App() {
  // creation de card
   return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img className="img"  variant="top" src="https://media.gqmagazine.fr/photos/5d8b7254c7191e00083ebdbb/16:9/w_1920,h_1080,c_limit/como%20hacer%20la%20mejor%20pizza%20del%20mundo.jpg" />

      <Card.Body>
        <Card.Title>Pizza</Card.Title>
        <Card.Text>
        la pizza est une recette de cuisine traditionnelle de la cuisine italienne
        </Card.Text>
      </Card.Body>
    </Card>
    <p> Hello {firstName|| "there"}</p>
    {firstName && < img style={{ width: '344px' }} src = {Product.image} alt={Product.name} /> }
  
   </div> 
   
  );


  
} 


export default App;
