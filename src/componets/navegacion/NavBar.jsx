
import Container from 'react-bootstrap/Container';
import { AiFillCar } from "react-icons/ai";
import CarWidget from './CarWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar =() => {

   return (
    <>
       <Navbar bg="primary" variant="primary" className='barra'>
       <Container>
        <Navbar.Brand href="#home" >
          <AiFillCar/>
          Carcomm
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Comprar</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">autos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">camioneta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">motos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              vender mi auto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#">
        
          <CarWidget/>
          </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );

    
    
 
}

export default NavBar;

