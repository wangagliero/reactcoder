
import Container from 'react-bootstrap/Container';
import { CgPokemon } from "react-icons/cg";
import CarWidget from './CarWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar =() => {

   return (
    <>
       <Navbar bg="primary" variant="primary" className='barra'>
       <Container>
        <Navbar.Brand href="/" >
          <CgPokemon/>
          Poke
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/comprar">comprar</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categoria/fuego">fuego</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/tierra">tierra</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/agua">agua</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Card">
              comprar pokemons
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="card">
          <link to='./Card'></link>
          <CarWidget/>
          </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );

    
    
 
}

export default NavBar;

