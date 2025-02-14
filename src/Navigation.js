import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <Navbar className="nav-bar-container" bg="light" variant="light" sticky="top">
                <Container>
                <Navbar.Brand href="/">Hephaestus</Navbar.Brand>
                    <a className="gitLink" href='https://github.com/Abielf/Haphaestus-frontend'>github link</a>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home </Nav.Link>
                    <Link to="/newpost"> Create Post</Link>
                    </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;