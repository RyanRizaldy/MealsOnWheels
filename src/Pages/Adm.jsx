import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../image/rothy.png";
import food from "../image/pancake.jpg";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Admin() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(255, 235, 214)" }}>
        <Container className="userInfoContainer align-items-center">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <p style={{ textAlign: "right", margin: "15px" }}>Edit</p>
            </Col>
            <Col lg={4} md={12} sm={12} className="userPic">
              <img
                src={pic}
                alt="Logo"
                className="rounded-circle"
                height={"150px"}
              />
              <div>
                <h5>Member Name</h5>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="userInfo">
                <h5>Email</h5>
                <p>example.test@gmail.com</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="userInfo">
                <h5>Status</h5>
                <p>Admin</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Tabs
          defaultActiveKey="Member"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Member" title="Member">
            <Container>
              <h4 className="my-3 text-start">Member</h4>
            </Container>
            <Container>
              <Row>
              <Table striped    responsive className="border">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>mark@gmail.com</td>
                    <td>Sukabumi, Jabar</td>
                    <td className="justify-content-between">
                      <Row>
                        <Col lg={2} md={6} sm={12}>
                      <Button className="btn btn-primary mx-2 ">Edit</Button>
                        </Col>
                        <Col lg={2} md={6} sm={12}>
                      <Button className="btn btn-danger">Delete</Button>
                      </Col>
                      </Row>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>jacob@gmail.com</td>
                    <td>Jakarta, Indonesia</td>
                    <td className="justify-content-between">
                      <Button className="btn btn-primary mx-2 ">Edit</Button>

                      <Button className="btn btn-danger">Delete</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Order" title="Order">
            <Container>
              <h4 className="my-3 text-start">Order</h4>
            </Container>
            <Container>
             
              <Table striped  responsive className="border">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Member Name</th>
                    <th>Order No</th>
                    <th>Partner</th>
                    <th>Driver</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2</td>
                    <td>Partner Name</td>
                    <td>Driver Name</td>
                    <td className="text-center text-light bg-success">Completed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jennie</td>
                    <td>7</td>
                    <td>Partner Name</td>
                    <td>Driver Name</td>
                    <td className="text-center text-light bg-warning">On the Way</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jennie</td>
                    <td>7</td>
                    <td>Partner Name</td>
                    <td>Driver Name</td>
                    <td className=" text-center text-light bg-danger">On Process</td>
                  </tr>
                </tbody>
              </Table>
             
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Admin;
