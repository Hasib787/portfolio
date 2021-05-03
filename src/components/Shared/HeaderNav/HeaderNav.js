import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
    return (
        <div>
            <Navbar className="s-navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/home" id="logo"><Navbar.Brand className="fw-bold fs-3" href="#home">Masud <span style={{color:'#00a1a7'}}>Rana</span></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-menu">
                    <Link to="/home" className="nav-title"><Nav.Link className="nav-title" href="#home" active>Home</Nav.Link></Link>
                        <Nav.Link  className="nav-title" href="#about">About</Nav.Link>
                        <Link to="/projects" className="nav-title"><Nav.Link  className="nav-title" href="#projects">Projects</Nav.Link></Link>
                        <Link to="/blog" className="nav-title"><Nav.Link  className="nav-title"  href="#blog">Blog</Nav.Link></Link>
                        <Nav.Link  className="nav-title" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNav;