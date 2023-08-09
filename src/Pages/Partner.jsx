import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../image/riceGarden.png";
import food from "../image/pancake.jpg";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState, useEffect } from 'react';
import OrderList from "../Components/OrderList";

function Partner() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    role: "",
  });

  


  const handleToggleEditMode = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      address: address,
      phone: phone,
    };

    axios.post('http://localhost:8080/api/user/new_partner', userData)
      .then((response) => {
        console.log(response.data);
        // Handle success response
        // Show success message or redirect to another page
        setIsEditMode(false); // Exit edit mode after successful submission
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
        // Show error message or handle specific error cases
      });
  };

//UPLOAD MEALS

const [userLog,setUserLog] = useState(null)
  useEffect(()=>{
    setUserLog(JSON.parse(sessionStorage.getItem("user")))
    
  },[])

const [mealsName, setMealsName] = useState('');
const [carbs, setCarbs] = useState('');
const [fat, setFat] = useState('');
const [protein, setProtein] = useState('');
const [file, setFile] = useState(null);


const handleUpload = (event) => {
  event.preventDefault();

  // Create form data object
  const formData = new FormData();
  formData.append('name', mealsName);
  formData.append('carbs', carbs);
  formData.append('fat', fat);
  formData.append('protein', protein);
  formData.append('fileImage', file);
  formData.append('partnerId',userLog.roleData.partnerId);

  // Send the form data to the server
  fetch('http://localhost:8080/api/partner/post_menu', {
    method: 'POST',
    body: formData,
  })
    .then((data) => {
      console.log(data); // Handle the response from the server
      alert("Successfully uploaded!");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
//END UPLOAD MEALS

  const [selectedOption, setSelectedOption] = useState('task');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  
 useEffect(() => {
   const userData = JSON.parse(sessionStorage.getItem("user"));
   if (userData) {
     setUserInfo({
       name: userData.roleData.name,
       email: userData.email,
       username: userData.username || "",
       address: userData.roleData.address,
       phone: userData.roleData.phone,
       role: userData.role,
     });
   }
 }, []);

//   //  START TABLE ORDER//
//  const [orderList, setOrderList] = useState(null);

//  useEffect(()=>{
//    setUserLog(JSON.parse(sessionStorage.getItem("user")))
//    try {
//      axios.get(
//        "http://localhost:8080/api/order/list_order",
//      ).then((response)=>{
//       setOrderList(response.data)
       
//      })

//    } catch (error) {
//      console.error("Error fetching order:", error);
//    }
//  },[])
// //  END TABLE ORDER//

// const handleProsesOrder = (orderId, partnerId) => {
//   try {
//     axios.post(`http://localhost:8080/api/proses_order/${orderId}`, { partnerId })
//       .then(() => {
//         // Handle success if needed
//         console.log("success")
//       })
//       .catch((error) => {
//         console.error('Error processing order:', error);
//         // Handle error if needed
//         alert("error")
//       });
//   } catch (error) {
//     console.error('Error processing order:', error);
//     // Handle error if needed
//     alert("error")
//   }
// };


  let content;

  if (selectedOption === 'task') {
    content = 
    <>
    <div className="contentWrapper">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12} className="cardWrapper">
              <div className="card">
                <h5 style={{ fontWeight: "bold", textAlign : 'center'}}>Meals Plan 1</h5>
                <h5 className="my-3">Member Name</h5>

                <h4 className="mt-3">
                 This will be address of the member
                </h4>
                <div className="reciveWrapper">
                  <div className="cardStatus">
                    <Button variant="dark" className="reciveButton">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Col>            
            <Col lg={3} md={6} sm={12} className="cardWrapper">
              <div className="card">
                <h5 style={{ fontWeight: "bold", textAlign : 'center'}}>Meals Plan 1</h5>
                <h5 className="my-3">Member Name</h5>

                <h4 className="mt-3">
                 This will be address of the member
                </h4>
                <div className="reciveWrapper">
                  <div className="cardStatus">
                    <Button variant="dark" className="reciveButton">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Col>            
            <Col lg={3} md={6} sm={12} className="cardWrapper">
              <div className="card">
                <h5 style={{ fontWeight: "bold", textAlign : 'center'}}>Meals Plan 1</h5>
                <h5 className="my-3">Member Name</h5>

                <h4 className="mt-3">
                 This will be address of the member
                </h4>
                <div className="reciveWrapper">
                  <div className="cardStatus">
                    <Button variant="dark" className="reciveButton">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Col>            
          </Row>
        </Container>
      </div>
    </>;
  } else if (selectedOption === 'progress') {
    content = 
    <>
      <Container>
              <h4 className="my-3 text-start">Order</h4>
            </Container>

            <Container>
            {/* <Table striped responsive className="border">
                <thead>
                  <tr >
                    <th>No</th>
                    <th>Member Name</th>
                    <th>Order No</th>
                    <th>Partner</th>
                    <th>Driver</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {orderList && orderList.map((value,index)=>(
                    <tr key={value.orderId}>
                    <td>{index + 1}</td>
                    <td>{value.member.name}</td>
                    <td>{value.orderId}</td>
                    <td>{value.partnerName === null ? "-":value.partnerName}</td>
                    <td>{value.driver === null ? "-":value.driver.name}</td>
                    <td className="">
                      {value.status}
                    </td>
                    <td><Button onClick={() => handleProsesOrder(value.orderId, value.partnerId)}>action</Button></td>
                  </tr>
                  ))}
                  
                </tbody>
              </Table> */}
              <OrderList/>
            </Container>
    </>;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  } else if (selectedOption === 'addMeals') {
    content = 
    <>
      <Container>
      <Form  onSubmit={handleUpload} encType="multipart/form-data" className="px-5">
          <Form.Group className="formInput mb-3">
            <Form.Label>Meals Name</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={mealsName}
          onChange={(e) => setMealsName(e.target.value)}
          required
            />
          </Form.Group>
          

          <Form.Group className="formInput mb-3">
            <Form.Label>Carbs</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
              required
            />
          </Form.Group>
          

          <Form.Group className="formInput mb-3">
            <Form.Label>Fat</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              required
            />
          </Form.Group>
          
          <Form.Group className="formInput mb-3">
            <Form.Label>Protein</Form.Label>
            <Form.Control
              style={{ outline: "none", boxShadow: "none" }}
              type="text"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
    accept="image/*"
    onChange={(e) => setFile(e.target.files[0])}
              
            />
            <Form.Control.Feedback type="invalid" tooltip>
              
            </Form.Control.Feedback>
          </Form.Group>

          <div className="loginButtonWrapper mb-5">
            <Button variant="dark" className="loginButton" type="submit">
              Add
            </Button>
          </div>
        </Form>
      </Container>
    </>;
  }
  return (
    <>
      <div className="userInfoContainer">
        <Container>
          <Row>
            <Col
              lg={12}
              md={12}
              sm={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                onClick={handleToggleEditMode}
                style={{
                  margin: "15px",
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
                variant="dark"
              >
                {isEditMode ? "View Profile" : "Edit Profile"}
              </Button>
            </Col>
            <Col lg={4} md={12} sm={12} className="userPic">
              <img
                src={pic}
                alt="Logo"
                height={"150px"}
                className="rounded-circle"
              />
            </Col>
            <Col lg={4} md={6} sm={12}>
              {isEditMode ? (
                <Form onSubmit={handleSubmit}>
                  <div className="userInfo">
                    <h5>Name</h5>
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={!isEditMode}
                      required
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Email</h5>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!isEditMode}
                      required
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Address</h5>
                    <Form.Control
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      disabled={!isEditMode}
                      required
                      style={{ outline: "none", background: "rgba(0,0,0,0.0)" }}
                    />
                  </div>
                  <div className="userInfo">
                    <h5>Phone</h5>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={!isEditMode}
                      required
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
                    <h5>Email</h5>
                    <p id="email">{userInfo.email}</p>
                  </div>
                  <div className="userInfo">
                    <h5>Address</h5>
                    <p id="address">{userInfo.address}</p>
                  </div>
                </>
              )}
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="userInfo">
                <h5>Phone</h5>
                <p id="phone">{userInfo.phone}</p>
              </div>

              <div className="userInfo">
                <h5>Status</h5>
                <p>{userInfo.role}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="contentTitle">
        <div class="d-flex justify-content-start text-decoration-none py-4 text-black">
          <Button
            className={selectedOption === "task" ? "active" : ""}
            onClick={() => handleOptionChange("task")}
            variant="outline"
          >
            Task
          </Button>
          <Button
            className={selectedOption === "progress" ? "active" : ""}
            onClick={() => handleOptionChange("progress")}
            variant="outline"
          >
            Progress
          </Button>
          <Button
            className= {selectedOption === "addMeals" ? "active" : ""}
            onClick={() => handleOptionChange("addMeals")}
            variant="outline"
            
          >
            Add Meals
          </Button>
        </div>
      </Container>

      {content}
    </>
  );
}
export default Partner;
