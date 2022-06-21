import React from 'react';
import { Nav, Container, NavDropdown, Navbar} from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../utils/queries';


export const Navigation = () => {
    const { loading, error, data } = useQuery(CATEGORIES)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Hlavní stránka</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Módy" id="collasible-nav-dropdown">
                    { data.categories.data.map(category => (
                        <NavDropdown.Item key={category.id} href={`/categories/${category.id}`}>{category.attributes.name}</NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Nav.Link href="/people">Vyvojáři</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Container>
        </Navbar>
              
    );
}