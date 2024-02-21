'use client';

import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { Formik } from 'formik';
import React from 'react';

const Contact = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <Row className="justify-content-center">
                <Col xs={12}>
                    <h1>Contact Us</h1>
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.name) errors.name = 'Required';
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.message) errors.message = 'Required';
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values); // Handle form submission logic here
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label className="mt-3">Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        placeholder="Enter your name"
                                        className="d-inline"
                                        
                                    />
                                    {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label  className="mt-3">Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Enter your email"
                                          className="d-inline"
                                    />
                                    {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                                </Form.Group>
                                <Form.Group controlId="message">
                                    <Form.Label  className="mt-3">Message:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        placeholder="Enter your message"
                                          className="d-inline"
                                    />
                                    {errors.message && touched.message && <div className="text-danger">{errors.message}</div>}
                                </Form.Group>
                                <Button variant="primary" type="submit" disabled={isSubmitting} className="mt-3 mx-auto d-block">Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
