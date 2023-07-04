import React from 'react'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
      <Container className="my-5 p-5">
        <Row>
          <h1 className="fw-bold">
            Love to hear from you, <br />
            Get in touch 👋
          </h1>
        </Row>

        <Form className="pe-4">
          <Row className="justify-content-between">
            <Col>
              <Form.Group className="formInput mb-3 me-5">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  style={{ outline: "none", boxShadow: "none" }}
                  type="text"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="formInput mb-2">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  style={{ outline: "none", boxShadow: "none" }}
                  type="text"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="formInput mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                style={{ outline: "none", boxShadow: "none", border : '1px solid #ccc' }}
                as="textarea"
                rows={3}
                type='text'
              />
            </Form.Group>
          </Row>
        </Form>
        <div className='text-center mt-4'>
          <Button variant='dark' className='w-25 py-3 rounded-5'>
            Send 
          </Button>
        </div>
      </Container>
    </>
  );
}