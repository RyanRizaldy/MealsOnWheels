import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function Login(){
    return (
      <>
        <Container className="loginContainer">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="loginForm">
                <h2>Login</h2>
                <Form>
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
                    Login
                  </Button>
                </div>
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