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
import Donor from './Pages/Donor'

function App() {
  return (
    <>
<Header/>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Partner" element={<Partner/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Driver" element={<Driver/>}/>
    <Route path="/Member" element={<Member/>}/>
    <Route path="/Donor" element={<Donor/>}/>
    <Route path="/Volunteer" element={<Volunteer/>}/>
    <Route path="/Admin" element={<Admin/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Terms" element={<Terms/>}/>
   

  </Routes>
</Router>
<Footer />



    </>
  );
}

export default App;
