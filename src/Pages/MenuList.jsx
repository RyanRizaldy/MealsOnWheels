import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../image/rothy.png";

import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const MenuList = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/admin/all_user");
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

   const handleApprove = async (id) => {
     try {
       await axios.post(`http://localhost:8080/api/admin/approve/${id}`);
       // Update the state or fetch the users again if needed
       // ...
     } catch (error) {
       console.error("Error approving user:", error);
     }
   };

   const memberUsers = users.filter((user) => user.role === "member");
   const partnerUsers = users.filter((user) => user.role === "partner");
   const driverUsers = users.filter((user) => user.role === "driver");
   const volunteerUsers = users.filter((user) => user.role === "volunteer");
   const donaturUsers = users.filter((user) => user.role === "donatur");


  return (
    <div>
      <Container>
        <Tabs className="mb-3 ">
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
                      <th>Email</th>
                      <th>Address</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {memberUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.roleData.memberId}</td>
                        <td>{user.roleData.name}</td>
                        <td>{user.email}</td>
                        <td>{user.roleData.address}</td>
                        <td>{user.role}</td>
                        <td>
                          {user.approved === false ? (
                            <button
                              className="bg-danger rounded-3"
                              onClick={() => handleApprove(user.userId)}
                            >
                              Approve
                            </button>
                          ) : (
                            <button className="bg-success rounded-3">
                              Approved
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Partner" title="Partner" className="">
            <Container>
              <h4 className="my-3 text-start">Partner</h4>
            </Container>
            <Container>
              <Row>
                <Table striped responsive className="border">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partnerUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.roleData.partnerId}</td>
                        <td>{user.roleData.name}</td>
                        <td>{user.email}</td>
                        <td>{user.roleData.address}</td>
                        <td>{user.role}</td>
                        <td>
                          {user.approved === false ? (
                            <button
                              className="bg-danger rounded-3"
                              onClick={() => handleApprove(user.userId)}
                            >
                              Approve
                            </button>
                          ) : (
                            <button className="bg-success rounded-3">
                              Approved
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Driver" title="Driver" className="">
            <Container>
              <h4 className="my-3 text-start">Driver</h4>
            </Container>
            <Container>
              <Row>
                <Table striped responsive className="border">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driverUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.roleData.deiverId}</td>
                        <td>{user.roleData.name}</td>
                        <td>{user.email}</td>
                        <td>{user.roleData.address}</td>
                        <td>{user.role}</td>
                        <td>
                          {user.approved === false ? (
                            <button
                              className="bg-danger rounded-3"
                              onClick={() => handleApprove(user.userId)}
                            >
                              Approve
                            </button>
                          ) : (
                            <button className="bg-success rounded-3">
                              Approved
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Volunteer" title="Volunteer" className="">
            <Container>
              <h4 className="my-3 text-start">Volunteer</h4>
            </Container>
            <Container>
              <Row>
                <Table striped responsive className="border">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteerUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.roleData.volunteerId}</td>
                        <td>{user.roleData.name}</td>
                        <td>{user.email}</td>
                        <td>{user.roleData.address}</td>
                        <td>{user.role}</td>
                        <td>
                          {user.approved === false ? (
                            <button
                              className="bg-danger rounded-3"
                              onClick={() => handleApprove(user.userId)}
                            >
                              Approve
                            </button>
                          ) : (
                            <button className="bg-success rounded-3">
                              Approved
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Donatur" title="Donatur" className="">
            <Container>
              <h4 className="my-3 text-start">Donatur</h4>
            </Container>
            <Container>
              <Row>
                <Table striped responsive className="border">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                     
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donaturUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.roleData.donaturId}</td>
                        <td>{user.roleData.name}</td>
                        <td>{user.email}</td>
                        
                        <td>{user.role}</td>
                        <td>
                          {user.approved === false ? (
                            <button
                              className="bg-danger rounded-3"
                              onClick={() => handleApprove(user.userId)}
                            >
                              Approve
                            </button>
                          ) : (
                            <button className="bg-success rounded-3">
                              Approved
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};


export default MenuList;
