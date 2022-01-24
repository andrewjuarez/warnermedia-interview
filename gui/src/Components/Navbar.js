import React from 'react';
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';
import SearchBar from './SearchBar';

export default function CustomNavbar() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
                <Navbar.Brand href='/'>MovieDB</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav
                        className='me-auto my-2 my-lg-0'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <SearchBar />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
