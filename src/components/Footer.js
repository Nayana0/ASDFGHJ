import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import sit from "../assets/img/sit bg.png";
import technisium from"../assets/img/technisium.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { TextCenter } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={sit} alt="sitimage" />
            <img src={technisium} alt="techn" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
           <span class="copyright">Copyright 2024 | SIT Technisium</span>
          </Col>
        </Row>
      </Container>

      
    </footer>
  )
}
