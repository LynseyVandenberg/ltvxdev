import { Card, Button, Form, Row, Col, FloatingLabel } from 'react-bootstrap';

const Contact = () => {
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
            <Form.Control name="query" as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
            </Button>
    </Form >
    )
};

export default Contact;
