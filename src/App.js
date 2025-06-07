import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import {Container, Nav, Navbar, Breadcrumb, NavDropdown, footer} from 'react-bootstrap';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import FAQ from './pages/FAQ';
import Confirmation from './pages/Confirmation';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href='/'>Hardware Heros</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as = {Link} to = "/">Home</Nav.Link>
              
               <NavDropdown
                title={
                  <Link to= '/services' style={{ color:"inherit", cursor: 'pointer' }}>
                    Services
                  </Link>
                }
                id="services-dropdown"
              >
              <NavDropdown.Header>General Diagnostics and repair </NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/services">Diagnostics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">repair</NavDropdown.Item>
              <NavDropdown.Divider />
              
              <NavDropdown.Header>Battery Replacement</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/services">Phone</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">Laptop</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Header>Installation</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/services">Install</NavDropdown.Item>
              
             
            
            
            </NavDropdown>
              

              
              
              <Nav.Link as = {Link} to="/appointment">Schedule drop off</Nav.Link>
              <Nav.Link as = {Link} to="/contact">Contact Us</Nav.Link>
             
              <Nav.Link as = {Link} to="/FAQ">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} /> 
          
          
          <Route path="/appointment" element={<Appointment />} />
        
          <Route path="/contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Confirmation" element={<Confirmation />} />
        </Routes>
      </Container>


        <footer class = "footer">
        <div class = "alink">
            <a href="/services" >Services </a> |
            <a href="/services">Schedule dropoff </a> |
            <a href="/contact">Contact</a>|
            <a href="/contact">FAQ</a> 
            
        </div>
        <p>Phone: (613) 123-4567 | Email: hardwareheroes@memes.com</p>
        <p>&copy; 2025 Hardware Heroes. All rights reserved.</p>
    </footer>
    </Router>
  );


}

export default App;
