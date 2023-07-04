import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Img from '../image/registerImg.jpg'

function Register(){
    return (
      <>
        <Container className="loginContainer">
          <Row className='align-items-center'>
            <Col lg={6} md={6} sm={12}>
              <div className="registerForm">
                <h1>Register, and Start Sharing Love</h1>
                <Form className='pe-4'>
                  <Form.Group className="formInput mb-3">
                    <Form.Label>Full Name</Form.Label>
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
                  <Form.Group className="formInput mb-3">
                    <Form.Label>Register As</Form.Label>
                    <Form.Select
                      style={{ outline: "none", boxShadow: "none" }}
                      aria-label="Default select example"
                      className="option"
                    >
                      <option></option>
                      <option value="1">Member</option>
                      <option value="2">Donor</option>
                      <option value="3">Patner</option>
                      <option value="4">Driver</option>
                      <option value="5">Volunteer</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
                <div className="loginButtonWrapper">
                  <Button variant="dark" className="loginButton">
                    Register
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <img src={Img}  alt="Logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
}
export default Register;