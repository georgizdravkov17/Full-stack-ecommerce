import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom' 
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const NavBar = () => {

    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState("");

    return(
        <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Site Title</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        name="searchValue"
                        aria-label="Search"
                        onChange={(event) => { setSearchValue(event.target.value); }}
                        />
                        <Button variant="outline-success" onClick={() => { console.log(searchValue) }}>Search</Button>
                    </Form>
                    </Navbar.Collapse>
                    <Button variant="primary" onClick={ () => { navigate("/login") } }>Sign in</Button>
                    <Button variant="primary" onClick={ () => { navigate("/register") } }>Sign up</Button>
                </Container>
                </Navbar>
    );
}

export default NavBar;