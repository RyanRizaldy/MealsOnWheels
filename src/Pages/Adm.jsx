
import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../image/rothy.png";

import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Contact from './Contact';


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
                <h5>Chlarisa</h5>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="userInfo">
                <h5>Email</h5>
                <p>admin@gmail.com</p>
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
          className="mb-3 "
        >
          {/* Member tabs */}
          <Tab eventKey="Member" title="Member" className="">
            <Container>
              <h4 className="my-3 text-start">Member</h4>
            </Container>
            <Container>
              <Row>
                <Table striped responsive className="border">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>mark23</td>
                      <td>mark@gmail.com</td>
                      <td>Sukabumi, Jabar</td>
                      <td>
                        <Row>
                          <Col lg={2} md={6} sm={12} >
                            <Button className="btn btn-primary">
                              Edit
                            </Button>
                          </Col>
                          <Col lg={2} md={6} sm={12}>
                            <Button className="btn btn-danger ms-3">Delete</Button>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Tab>

          {/* partner Tabs  */}

          <Tab eventKey="partner" title="Partner">
            <Container>
              <h4 className="my-3 text-start">Partner</h4>
            </Container>
            <Container>
              <Table striped responsive className="border">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Partner Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Amily</td>
                    <td>Kuala Lumpur, Malaysia</td>
                    <td>amyfood@gmail.com</td>
                    <td>0857261236718</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Tab>

          {/* Driver */}
          <Tab eventKey="Driver" title="Driver">
            <Container>
              <h4 className="my-3 text-start">Driver</h4>
            </Container>
            <Container>
              <Table striped responsive className="border">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Driver Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Amily</td>
                    <td>Kuala Lumpur, Malaysia</td>
                    <td>amyfood@gmail.com</td>
                    <td>0857261236718</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Tab>

          {/* Volunteer */}

          <Tab eventKey="Voluntreer" title="Volunteer">
            <Container>
              <h4 className="my-3 text-start">Volunteer</h4>
            </Container>
          </Tab>

          {/* Order Tabs */}

          <Tab eventKey="Order" title="Order">
            <Container>
              <h4 className="my-3 text-start">Order</h4>
            </Container>

            <Container>
              <Table striped responsive className="border">
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
                    <td className="text-light bg-success text-center">
                      Completed
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jennie</td>
                    <td>7</td>
                    <td>Partner Name</td>
                    <td>Driver Name</td>
                    <td className=" text-light bg-danger text-center">
                      On Process
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Tab>

          {/* Donatur */}

          <Tab eventKey="Donature" title="Donature">
            <Container>
              <h4 className="my-3 text-start">Donature</h4>
            </Container>

            <Container>
              <Table striped responsive className="border">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Donation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2000000</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jennie</td>
                    <td>7000000</td>
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
