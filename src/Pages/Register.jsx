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
  const [nameError,setNameError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError,setUsernameError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError,setAddressError] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailError,setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError,setPasswordError] = useState("");
  const [brand,setBrand] = useState("");
  const [brandError,setBrandError] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

   const handleSubmit = async (event) => {
     event.preventDefault();

     if (validateForm()){

     let endpoint;

     switch (selectedOption) {
       case "member":
         endpoint = "http://localhost:8080/api/user/new_member";
         break;
       case "partner":
         endpoint = "http://localhost:8080/api/user/new_partner";
         break;
       case "driver":
         endpoint = "http://localhost:8080/api/user/new_driver";
         break;
       case "volunteer":
         endpoint = "http://localhost:8080/api/user/new_volunteer";
         break;
       case "donor":
         endpoint = "http://localhost:8080/api/user/new_donatur";
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
         brand

         

       });

       console.log("Registration successful:", response.data);
       window.location.href="Login";
       // Optionally, perform any additional actions after successful registration
     } catch (error) {
       console.log("Error during registration:", error);
       // Optionally, handle any error conditions or display error messages
     }
    }
   };

   const validateForm = () => {
     let valid = true;

     // Validate name
     if (!name) {
       setNameError("Name is required");
       valid = false;
     }

     // Validate username
     if (selectedOption !== 'partner' && !username) {
       setUsernameError("Username is required");
       valid = false;
     }

     // Validate address
     if (selectedOption !== 'donor' && !address) {
       setAddressError("Address is required");
       valid = false;
     }

     if (!email) {
      setEmailError("Email is required");
      valid = false;
     }

     if (!password){
      setPasswordError("Password is required");
      valid = false;
     }

     if (selectedOption === "partner" && !brand){
      setBrandError("Brand is required");
      valid = false;
     } 

     return valid;
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
          {Boolean(nameError) && <div className="text-danger">{nameError}</div>}

          <Form.Group className="formInput mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          {Boolean(usernameError) && (
            <div className="text-danger">{usernameError}</div>
          )}

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
          {Boolean(addressError) && <div className="text-danger">{addressError}</div>}

          <Form.Group className="formInput mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {Boolean(emailError) && <div className="text-danger">{emailError}</div>}

          <Form.Group className="formInput mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {Boolean(passwordError) && <div className="text-danger">{passwordError}</div>}

          <div className="loginButtonWrapper">
            <Button variant="dark" className="loginButton" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </>
    );
  } else if (selectedOption === 'partner') {
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
          {Boolean(nameError) && <div className="text-danger">{nameError}</div>}

          <Form.Group className="formInput mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Group>
          {Boolean(brandError) && <div className="text-danger">{brandError}</div>}

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
          {Boolean(addressError) && (
            <div className="text-danger">{addressError}</div>
          )}

          <Form.Group className="formInput mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {Boolean(emailError) && (
            <div className="text-danger">{emailError}</div>
          )}

          <Form.Group className="formInput mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {Boolean(passwordError) && (
            <div className="text-danger">{passwordError}</div>
          )}

          <div className="loginButtonWrapper">
            <Button variant="dark" className="loginButton" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </>
    );
  } else if (selectedOption === 'driver') {
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
          {Boolean(nameError) && <div className="text-danger">{nameError}</div>}

          <Form.Group className="formInput mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          {Boolean(usernameError) && (
            <div className="text-danger">{usernameError}</div>
          )}

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
          {Boolean(addressError) && (
            <div className="text-danger">{addressError}</div>
          )}

          <Form.Group className="formInput mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {Boolean(emailError) && (
            <div className="text-danger">{emailError}</div>
          )}

          <Form.Group className="formInput mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {Boolean(passwordError) && (
            <div className="text-danger">{passwordError}</div>
          )}

          <div className="loginButtonWrapper">
            <Button variant="dark" className="loginButton" type="submit">
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
          {Boolean(nameError) && <div className="text-danger">{nameError}</div>}

          <Form.Group className="formInput mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          {Boolean(usernameError) && (
            <div className="text-danger">{usernameError}</div>
          )}

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
          {Boolean(addressError) && (
            <div className="text-danger">{addressError}</div>
          )}

          <Form.Group className="formInput mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {Boolean(emailError) && (
            <div className="text-danger">{emailError}</div>
          )}

          <Form.Group className="formInput mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {Boolean(passwordError) && (
            <div className="text-danger">{passwordError}</div>
          )}

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
          {Boolean(nameError) && <div className="text-danger">{nameError}</div>}

          <Form.Group className="formInput mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          {Boolean(usernameError) && (
            <div className="text-danger">{usernameError}</div>
          )}

          <Form.Group className="formInput mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {Boolean(emailError) && (
            <div className="text-danger">{emailError}</div>
          )}
          <Form.Group className="formInput mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {Boolean(passwordError) && <div className="text-danger">{passwordError}</div>}

          <div className="loginButtonWrapper">
            <Button variant="dark" className="loginButton" type="submit">
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