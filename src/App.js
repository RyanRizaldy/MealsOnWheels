import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Member from "./Pages/MemberDashboard";
import Driver from "./Pages/DriverDashboard";
import Volunteer from "./Pages/VolunteerDashboard";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
