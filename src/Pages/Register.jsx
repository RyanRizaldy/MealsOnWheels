import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Img from '../image/registerImg.jpg'
import React, { useState } from 'react';

function Register(){
  const [selectedOption, setSelectedOption] = useState('member');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  let content;

  if (selectedOption === 'member') {
    content =   
    <>
    <Form className='px-4'>
    <Form.Group className="formInput mb-3">
      <Form.Label>Full Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>User Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="email"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="password"
      />
    </Form.Group>
   
  </Form>
  <div className="loginButtonWrapper">
    <Button variant="dark" className="loginButton">
      Register
    </Button>
  </div>
  </>;
  } else if (selectedOption === 'patner') {
    content =
    <>
    <Form className='px-4'>
    <Form.Group className="formInput mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Company Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="email"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="password"
      />
    </Form.Group>
   
  </Form>
  <div className="loginButtonWrapper">
    <Button variant="dark" className="loginButton">
      Register
    </Button>
  </div>
  </>;
  } else if (selectedOption === 'driver') {
    content = 
    <>
    <Form className='px-4'>
    <Form.Group className="formInput mb-3">
      <Form.Label>Full Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>User Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="email"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="password"
      />
    </Form.Group>
   
  </Form>
  <div className="loginButtonWrapper">
    <Button variant="dark" className="loginButton">
      Register
    </Button>
  </div>
  </>;
  }else if (selectedOption === 'volunteer') {
    content = 
    <>
    <Form className='px-4'>
    <Form.Group className="formInput mb-3">
      <Form.Label>Full Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>User Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="email"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="password"
      />
    </Form.Group>
   
  </Form>
  <div className="loginButtonWrapper">
    <Button variant="dark" className="loginButton">
      Register
    </Button>
  </div>
  </>;
  }else if (selectedOption === 'donor') {
    content =
    <>
    <Form className='px-4'>
    <Form.Group className="formInput mb-3">
      <Form.Label>Full Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>User Name</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="text"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="email"
      />
    </Form.Group>

    <Form.Group className="formInput mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control
        style={{ outline: "none", boxShadow: "none" }}
        type="password"
      />
    </Form.Group>
   
  </Form>
  <div className="loginButtonWrapper">
    <Button variant="dark" className="loginButton">
      Register
    </Button>
  </div>
  </>;
  }

    return (
      <>
        <Container className="loginContainer">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="registerForm">
                <h1>Register, and Start Sharing Love</h1>
                <div className='registerAs'>
                <Button className={selectedOption === 'member' ? 'active' : ''}onClick={() => handleOptionChange('member')} variant="outline">
                  Member
                </Button>
                <Button className={selectedOption === 'patner' ? 'active' : ''}onClick={() => handleOptionChange('patner')} variant="outline">
                  Patner
                </Button>
                <Button className={selectedOption === 'driver' ? 'active' : ''}onClick={() => handleOptionChange('driver')} variant="outline">
                  Driver
                </Button>
                <Button className={selectedOption === 'volunteer' ? 'active' : ''}onClick={() => handleOptionChange('volunteer')} variant="outline">
                  Volunteer
                </Button>
                <Button className={selectedOption === 'donor' ? 'active' : ''}onClick={() => handleOptionChange('donor')} variant="outline">
                  Donor
                </Button>
                </div>
                {content}
              
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="registerImg">
                <img src={Img} alt="Logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
}
export default Register;