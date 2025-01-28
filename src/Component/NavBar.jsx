import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBarComponent() {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = () => {

        setLoggedIn(true);
    };
    return (
        <Navbar
            expand="lg"
            data-bs-theme="dark"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                height: '5rem',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: "100%",
                padding: "0 2rem"
            }}
        >
            <Container>
                <Navbar.Brand as={Link} to="/dashboard" className="fw-bold text-white d-flex align-items-center">
                    <span style={{ color: "#3D8BFD" }}>TRAVEL</span> VISTA
                </Navbar.Brand>

                <Nav className="mx-auto d-flex gap-4">
                    <Nav.Link as={Link} to="/dashboard" className="text-white">Home</Nav.Link>

                    <NavDropdown title="Packages" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/international">International</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/domestic">Domestic</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link as={Link} to="/popularPackage" className="text-white">Package</Nav.Link>
                    <Nav>
                        {loggedIn ? (
                            <Nav.Link as={Link} to="/profile" className="text-white">
                                Profile
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/loginform" className="text-white">
                                Login
                            </Nav.Link>
                        )}
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;
