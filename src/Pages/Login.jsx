import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from "axios";
import { useState, useEffect } from 'react';
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";



function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const MySwal = withReactContent(Swal);
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    const user = {
      usernameOrEmail: email,
      password: password
    };
  
    try {
      const response = await axios.post('http://localhost:8080/api/user/login', user);
  
      const isApproved = response.data.approved;
      if (!isApproved) {
        alert("User is inactive. Cannot login.");
        return;
      }
  
      const { role, approved, ...userData } = response.data;
      const userWithRole = {
        ...userData,
        role: role,
        approved: approved
      };
  
      sessionStorage.setItem("user", JSON.stringify(userWithRole));
      // Redirect to the dashboard page using React Router
      // Example: history.push('/dashboard');
      let redirectUrl;
      switch (response.data.role) {
        case "member":
          redirectUrl = "/Member";
          break;
        case "partner":
          redirectUrl = "/Partner";
          break;
        case "driver":
          redirectUrl = "/Driver";
          break;
        case "admin":
          redirectUrl = "/Admin";
          break;
          case "donatur":
          redirectUrl = "/Donor";
          break;
          case "volunteer":
          redirectUrl = "/Volunteer";
          break;

        default:
          window.location.href="/";
          break;
      }
      window.location.href = redirectUrl;

    } catch (error) {
  Swal.fire(
  'Error!',
  'Username or Password Wrong!',
  'error'
)
    }
  
    setEmail('');
    setPassword('');
  };

    return (
      <>
        <Container className="loginContainer">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="loginForm">
                <h2>Login</h2>
                
                <Form onSubmit={handleLogin}>
                  <Form.Group className="formInput mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      style={{ outline: "none", boxShadow: "none" }}
                      type="email"
                      value={email}  
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="formInput mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      style={{ outline: "none", boxShadow: "none" }}
                      type="password"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <div className="loginButtonWrapper">
                  <Button variant="dark" className="loginButton" type="submit">
                    Login
                  </Button>
                </div>

                </Form>

               
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="accountChoice">
                <h2>No Account ?</h2>
                <div className="loginButtonWrapper">
                  <Button
                    variant="dark"
                    href="Register"
                    className="accountButton"
                  >
                    Register
                  </Button>
                </div>
                <h2 style={{ marginTop: "20px" }}>or</h2>
                <div className="loginButtonWrapper">
                  <Button variant="primary" className="accountButton">
                    Login with Facebook
                  </Button>
                </div>
                <div className="loginButtonWrapper">
                  <Button
                    variant="light"
                    className="accountButton googleButton"
                  >
                    login with Google
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
}
export default Login;