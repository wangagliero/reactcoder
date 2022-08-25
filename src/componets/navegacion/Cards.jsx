import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card'

function Cards(){
    return(
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://autotest.com.ar/wp-content/uploads/2022/01/VOLKSWAGEN-GOL-CONSUMO.jpg" />
      <Card.Body>
        <Card.Title>Gol Trend</Card.Title>
        <Card.Text>
          Gol trend 
          modelo 2011 
          64.000km 
          nafta
          unica mano
  
        </Card.Text>
        <Button variant="dark">Comprar </Button>
      </Card.Body>
    </Card>
    
  );
}
export default Cards;




    


    





    
    