import React from 'react'
import { Container } from 'react-bootstrap';

export default function Location() {
  return (
    <div>
      <Container fluid>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126921.16447334258!2d106.8302336!3d-6.22592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f36d922448d5%3A0x83736dbd7ef2b25c!2sTebet%20Eco%20Park!5e0!3m2!1sid!2sid!4v1688545436870!5m2!1sid!2sid"
          classname="vw-100"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </div>
  );
}
