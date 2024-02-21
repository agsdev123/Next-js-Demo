'use client';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { authenticateUser, storeAccessToken } from '@/src/app/-utils/auth';

import { Formik } from 'formik';
import React from 'react';
import { useRouter } from 'next/navigation';

// import { authenticateUser, storeAccessToken } from '@/app/-utils/auth';


export default function LoginPage() {
    const router = useRouter();

    const handleLogin = async (values, { setSubmitting, setFieldError }) => {
        try {
            const accessToken = await authenticateUser(values.username, values.password);
            if (accessToken) {
                storeAccessToken(accessToken);
                router.push('/dashboard');
            } else {
                setFieldError('username', 'Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
        setSubmitting(false);
    };

    return (
        <Container className="h-100">
            <Row className="justify-content-center align-items-center h-100">
                <Col md={6}>
                    <h1 className="text-center mb-4">Login</h1>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.username) errors.username = 'Required';
                            if (!values.password) errors.password = 'Required';
                            return errors;
                        }}
                        onSubmit={handleLogin}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.username && errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.password && errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
}
