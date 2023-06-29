import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Member from "./Pages/MemberDashboard";

function App() {
  return (
    <>
    <Header/>
    <Member/>
    <Footer/>
    </>
  );
}

export default App;
