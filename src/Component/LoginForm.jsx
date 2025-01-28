import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;

    function passValidation(e) {
        const value = e.target.value;
        setPassword(value);
        if (passwordRegex.test(value)) {
            setErrorMessage('');
        } else {
            setErrorMessage('invalid password.');
        }
    }
    

    const handleSubmit = (e) => {

        if (email === "admin@gmail.com" && password === "Pass@123") {
            alert("Login successful!");

            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }

    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            
            <div style={{ width: '30%' }}>
                <Row>
                    <Col md={12}>
                        <h3 className="text-center mb-4">Login</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={passValidation}
                                    required
                                />
                                {errorMessage && <span className="text-danger">{errorMessage}</span>}
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100" >
                                Login
                            </Button>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                <span className="text-muted mx-2 w-1 " style={{ fontSize: '0.8rem' }}>Forget password?</span>
                                <span className="text-muted" style={{ fontSize: '0.8rem' }}>Register</span>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </div>

        </Container>
    );
};

export default LoginForm;
