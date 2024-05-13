import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Farazmand </span>
            from <span className="purple"> Khuzestan, Behbahan.</span>
            <br />
            I am currently Student at Shahid Chamran University of Ahvaz.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch movie and series
            </li>
            <li className="about-activity">
              <ImPointRight /> Following Soccer 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mofaraz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
