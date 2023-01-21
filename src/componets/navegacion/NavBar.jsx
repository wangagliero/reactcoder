
import Container from 'react-bootstrap/Container';
import { GiPokecog } from "react-icons/gi";
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
          <GiPokecog/>
          Poke
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">comprar</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">generacion1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">generacion2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">generacion3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              comprar pokemons
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

