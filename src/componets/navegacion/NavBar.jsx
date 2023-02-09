
import Container from 'react-bootstrap/Container';
import { CgPokemon } from "react-icons/cg";
import CarWidget from './CarWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  NavLink } from 'react-router-dom';
  

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
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>comprar</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavLink ClassName={({ isActive })=> isActive ? 'bg-success' : 'bg- dark'} to='/categoria/fuego'>fuego</NavLink>
              <NavDropdown.Divider />
              <NavLink ClassName={({ isActive })=> isActive ? 'bg-success' : 'bg- dark'} to='/categoria/tierra'>tierra</NavLink>
              <NavDropdown.Divider />
              <NavLink ClassName={({ isActive })=> isActive ? 'bg-success' : 'bg- dark'}  to='/categoria/agua'>agua</NavLink>
              <NavDropdown.Divider />
              <NavLink ClassName={({ isActive })=> isActive ? 'bg-success' : 'bg- dark'} to='categoria/electricidad'>electricidad</NavLink>
              <NavDropdown.Divider />
              <NavLink ClassName={({ isActive })=> isActive ? 'bg-success' : 'bg- dark'} to='/'>
              comprar pokemons
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="card">
          <NavLink  ClassName={({isActive})=> isActive ? 'bg-success' : 'bg- dark'} to='/Card'></NavLink>
          <CarWidget/>
          </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );

    
    
 
}

export default NavBar;

