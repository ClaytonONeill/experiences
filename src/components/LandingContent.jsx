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
          <h5>A Glimpse Into History...</h5>
          <p className="landing-content-overview">
            Step into the past and immerse yourself in one of the most pivotal
            and harrowing periods of history. Our immersive reenactment
            experience takes you to a concentration camp setting during World
            War II, where you can live out the roles of either a prison guard or
            an inmate.
          </p>
          <p>
            This unique experience offers an unprecedented chance to understand
            the harsh realities of life within a concentration camp, allowing
            participants to connect with history in a personal and impactful
            way.
          </p>
          <p className="landing-content-question-text">
            <h5>Which side will you be on?</h5>
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
