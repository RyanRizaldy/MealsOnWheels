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
import Help from "./Pages/Help";
import Stores from "./Pages/Stores";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
<Header/>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Partner" element={<Partner/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Help" element={<Help/>}/>
    <Route path="/Stores" element={<Stores/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Admin" element={<Admin/>}/>
  </Routes>
</Router>
<Footer />



    </>
  );
}

export default App;
