import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Feed from "./views/Feed/Feed";
import Login from "./views/Login/Login";
import PreLoginLanding from "./views/PreLoginLanding/PreLoginLanding";
import Profile from "./views/Profile/Profile";
import Signup from "./views/Signup/Signup";
import Ticket from "./views/Ticket/Ticket";
import TicketCreation from "./views/TicketCreation/TicketCreation";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<PreLoginLanding/>} />
        <Route exact path ="/feed" element={<Feed/>} /> 
        <Route exact path ="/login" element={<Login/>} /> 
        <Route exact path ="/profile" element={<Profile/>} /> 
        <Route exact path ="/signup" element={<Signup/>} /> 
        <Route exact path ="/ticket" element={<Ticket/>} /> 
        <Route exact path ="/ticket-creation" element={<TicketCreation/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
