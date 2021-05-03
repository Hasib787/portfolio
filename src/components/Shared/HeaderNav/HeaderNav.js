import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './HeaderNav.css';

const HeaderNav = () => {
    return (
        <div>
            <Navbar className="s-navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="fw-bold fs-3 logo" href="#home">Masud <span style={{color:'#00a1a7'}}>Rana</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-menu">
                        <Nav.Link className="nav-title" href="/home" active>Home</Nav.Link>
                        <Nav.Link  className="nav-title" href="#about">About</Nav.Link>
                        <Nav.Link  className="nav-title" href="/projects">Projects</Nav.Link>
                        <Nav.Link  className="nav-title" href="/blog">Blog</Nav.Link>
                        <Nav.Link  className="nav-title" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;