import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="py-4">
            <Navbar bg="light" variant="light" fixed="top">
                <Container>
                    <NavLink to="/home" className="nav fw-bold">Home</NavLink>

                    <Nav className="me-auto">
                        <NavLink to="/service" className="nav fw-bold">Services</NavLink>
                        <NavLink to="/event" className="nav fw-bold">Events</NavLink>
                        <NavLink to="/about" className="nav fw-bold">About Us</NavLink>
                        <NavLink to="/contact" className="nav fw-bold">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;