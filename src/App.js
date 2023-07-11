import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Member from "./Pages/MemberDashboard";
import Admin from "./Pages/Adm";
import Partner from "./Pages/Partner";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Driver from "./Pages/DriverDashboard";
import Volunteer from "./Pages/VolunteerDashboard";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Terms from "./Pages/Terms";
import Donor from './Pages/Donor';
import { useState, useEffect } from 'react';
import MenuList from "./Pages/MenuList";

function App() {

  const [userLog,setUserLog] = useState(null)
  useEffect(()=>{
    setUserLog(JSON.parse(sessionStorage.getItem("user")))
  },[])
  return (
    <>
<Header/>
<Router>
  <Routes>
    {}
    <Route path="/" element={<Home/>}/>
    <Route path="/Partner" element={<Partner/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Terms" element={<Terms/>}/>
    <Route path="/MenuList" element={<MenuList/>}/>
    {userLog && (
      <>
       {userLog.role === "driver" && (
    <Route path="/Driver" element={<Driver/>}/>
       )}
       {userLog.role === "member" && (
    <Route path="/Member" element={<Member/>}/>
    )}
    {userLog.role === "donatur" && (
    <Route path="/Donor" element={<Donor/>}/>
    )}
    {userLog.role === "volunteer" && (
    <Route path="/Volunteer" element={<Volunteer/>}/>
    )}
    {userLog.role === "admin" && (
    <Route path="/Admin" element={<Admin/>}/>
    )}
      </>
    )}
    
   
   

  </Routes>
</Router>
<Footer />



    </>
  );
}

export default App;
