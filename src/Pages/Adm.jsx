import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../image/rothy.png";

import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Contact from "./Contact";

import { useEffect } from "react";
import axios from "axios";

function Admin() {
  const [users, setUsers] = useState([]);

  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    username: "",
  });

  const handleToggleEditMode = () => {
    if (isEditMode) {
      setIsEditMode(false);
    } else {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        name: document.getElementById("name").textContent,
        email: document.getElementById("email").textContent,
        username: document.getElementById("username").textContent,
      }));
      setIsEditMode(true);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform update logic with userInfo
    // e.g., send data to server, update database, etc.
    console.log("Updating user information:", userInfo);
    setIsEditMode(false); // Exit edit mode after submitting
  };

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/all_user"
        );
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

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setUserInfo({
        name: userData.roleData.name,
        email: userData.email,
        username: userData.username || "",
      });
    }
  }, []);

  return (
    <>

      <div style={{ backgroundColor: "rgba(232,208,188,1)" }}>
        <Container className="userInfoContainer align-items-center">

          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              {/* <Button
                onClick={handleToggleEditMode}
                style={{
                  margin: "15px",
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
                variant="dark"
              >
                {isEditMode ? "View Profile" : "Edit Profile"}
              </Button> */}
            </Col>
            <Col lg={4} md={12} sm={12} className="userPic">
              <img
                src={pic}
                alt="Logo"
                height={"150px"}
                className="rounded-circle"
              />
            </Col>
            <Col lg={12} md={6} sm={12} ></Col>
            <Col lg={4} md={6} sm={12}>
              {isEditMode ? (
                <Form onSubmit={handleSubmit}>
                  <div className="userInfo">
                    <h5>Name</h5>
                    <Form.Control
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Email</h5>
                    <Form.Control
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Address</h5>
                    <Form.Control
                      type="text"
                      name="address"
                      value={userInfo.username}
                      onChange={handleInputChange}
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="dark"
                    style={{ marginTop: "20px" }}
                  >
                    Update
                  </Button>
                </Form>
              ) : (
                <>
                  <div className="userInfo">
                    <h5>Name</h5>
                    <p id="name">{userInfo.name}</p>
                  </div>

                  <div className="userInfo">
                    <h5>Username</h5>
                    <p id="address">{userInfo.username}</p>
                  </div>
                </>
              )}
            </Col>
            <Col>
              <div className="userInfo">
                <h5>Email</h5>
                <p id="email">{userInfo.email}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

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
    </>
  );
}

export default Admin;
