import React from 'react';
import '../css/ItemListComponets.css';
import {Card,Button} from 'react-bootstrap';

export const Item = (title,description,price,picture) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="" src={picture} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
        {price}
      </Card.Text>
      <Button variant="dark">Comprar </Button>
    </Card.Body>
  </Card>
  )
}

