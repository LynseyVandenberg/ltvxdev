import { Button, Form, Col, } from 'react-bootstrap';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <Form className="contact">
    <Form.Group as={Col} controlId="formGridName">
        <Form.Label>CONTACT</Form.Label>
        <Form.Control name="name" type="name" placeholder="Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label></Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email"
        />
    </Form.Group>
    <Form.Group as={Col} id="formGridQuery">
        <Form.Label></Form.Label>
        <Form.Control name="message" as="textarea" rows={3} />
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
        </Button>
</Form >
  );
}

export default Contact;