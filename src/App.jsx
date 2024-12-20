// Modules:
import { useState } from "react";

// Style:
import "./App.css";

// Bootstrap:
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Components:
import LandingContent from "./components/landingContent";

import logo from "./images/logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand>
            <img src={logo} className="navbar-logo"></img>
            Vercel Experiences
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="main-content-container">
        <LandingContent />
      </div>
    </div>
  );
}

export default App;
