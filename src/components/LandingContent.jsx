// Modules:
import React from "react";

// Bootstrap:
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function LandingContent() {
  return (
    <Container className="landing-content-container fade-in" fluid>
      <div>
        <div className="landing-content-text-container">
          <p className="landing-content-overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fuga
            voluptates soluta itaque explicabo a necessitatibus esse commodi
            provident delectus impedit repellat atque sed eius mollitia
            recusandae! Ut, repellat nihil.
          </p>
          <p className="landing-content-question-text">
            <b>Which side are you on?</b>
          </p>
        </div>
        <div className="landing-content-button-container">
          <Button variant="danger">Find out now</Button>
        </div>
      </div>
    </Container>
  );
}

export default LandingContent;
