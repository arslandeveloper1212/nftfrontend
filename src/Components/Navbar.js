import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Model from './Model';
import { NavLink } from 'react-router-dom';


const Navbaar = () => {
    return (
        <div>
          
            <Navbar className="navbar_hit_all" expand="lg">
                <Container>
                    <NavLink to="/">NFT</NavLink>
                    <Navbar.Toggle className='text-white' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto text-center custom_hit">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">Collection</NavLink>
                            <NavLink to="/feature">RoadMap</NavLink>
                          
                            <NavLink to="/faq">Community</NavLink>
                            
                        </Nav>
                            <br></br>
                        <Model/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbaar
