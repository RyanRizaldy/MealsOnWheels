import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Img from '../image/registerImg.jpg'
import React, { useState } from 'react';
import axios from 'axios';

function Register(){
  const [selectedOption, setSelectedOption] = useState('member');
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

   const handleSubmit = async (event) => {
     event.preventDefault();

     let endpoint;

     switch (selectedOption) {
       case "member":
         endpoint = "http://localhost:8080/api/user/new_member";
         break;
       case "partner":
         endpoint = "https://api.example.com/register/partner";
         break;
       case "driver":
         endpoint = "https://api.example.com/register/driver";
         break;
       case "volunteer":
         endpoint = "http://localhost:8080/api/user/new_volunteer";
         break;
       case "donor":
         endpoint = "https://api.example.com/register/donor";
         break;
       default:
         console.log("Invalid option");
         return;
     }

     try {
       const response = await axios.post(endpoint, {
         // Include the form field values here
         name,
         username,
         address,
         phone,
         email,
         password,
       });

       console.log("Registration successful:", response.data);
       // Optionally, perform any additional actions after successful registration
     } catch (error) {
       console.log("Error during registration:", error);
       // Optionally, handle any error conditions or display error messages
     }
   };
 

  let content;

  if (selectedOption === 'member') {
    content = (
      <>
        <Form onSubmit={handleSubmit} className="px-4">
          <Form.Group className="formInput mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="loginButtonWrapper">
            <Button variant="dark" className="loginButton" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </>
    );
  } else if (selectedOption === 'partner') {
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
   
 
  <div className="loginButtonWrapper">
    <Button variant="dark" className="loginButton">
      Register
    </Button>
  </div>
   </Form>
  </>;
  } else if (selectedOption === 'driver') {
    content = (
      <>
        <Form className="px-4">
          <Form.Group className="formInput mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Username</Form.Label>
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

          <div className="loginButtonWrapper">
            <Button variant="dark" className="loginButton">
              Register
            </Button>
          </div>
        </Form>
      </>
    );
  }else if (selectedOption === 'volunteer') {
    content = (
      <>
        <Form onSubmit={handleSubmit} className="px-4">
          <Form.Group className="formInput mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="loginButtonWrapper">
            <Button variant="dark" className="loginButton" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </>
    );
  }else if (selectedOption === 'donor') {
    content = (
      <>
        <Form className="px-4">
          <Form.Group className="formInput mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
            />
          </Form.Group>

          <Form.Group className="formInput mb-3">
            <Form.Label>Username</Form.Label>
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

          <div className="loginButtonWrapper">
            <Button variant="dark" className="loginButton">
              Register
            </Button>
          </div>
        </Form>
      </>
    );
  }

    return (
      <>
        <Container className="loginContainer">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="registerForm">
                <h1>Register, and Start Sharing Love</h1>
                <div className='registerAs'>
                <Button className={selectedOption === 'member' ? 'active' : ''} onClick={() => handleOptionChange('member')} variant="outline">
                  Member
                </Button>
                <Button className={selectedOption === 'partner' ? 'active' : ''}onClick={() => handleOptionChange('partner')} variant="outline">
                  Partner
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