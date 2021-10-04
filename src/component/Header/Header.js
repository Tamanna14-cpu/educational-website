import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="pb-5">
            <Navbar bg="light" variant="light">
                <Container>
                    <NavLink to="/home" className="nav">Home</NavLink>

                    <Nav className="me-auto">
                        <NavLink to="/service" className="nav">Services</NavLink>
                        <NavLink to="/event" className="nav">Events</NavLink>
                        <NavLink to="/about" className="nav">About Us</NavLink>
                        <NavLink to="/contact" className="nav">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;