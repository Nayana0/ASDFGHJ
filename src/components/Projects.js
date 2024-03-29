import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tech1.png";
import projImg2 from "../assets/img/tech2.png";
import projImg3 from "../assets/img/tech3.png";
import projImg4 from "../assets/img/tech4.png";
import projImg5 from "../assets/img/tech5.png";
import projImg6 from "../assets/img/tech6.png";
import projImg7 from "../assets/img/tech7.png";
import projImg8 from "../assets/img/tech8.png";
/*import colorSharp2 from "../assets/img/color-sharp2.png";*/
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
 
  const projects = [
    {
      title: "Hobby Project",
      description: "Design & Inventions",
      imgUrl: projImg1,
    },
    {
      title: "Hardware Debugging",
      description: "Analyse to solve",
      imgUrl: projImg2,
    },
    {
      title: "Techno Quiz",
      description: "Self Upgradation",
      imgUrl: projImg3,
    },
    {
      title: "Techno Managgement",
      description: "Circuit Debugging",
      imgUrl: projImg4,
    },
    {
      title: "Null",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Paper Presentation",
      description: "Tech Researchs",
      imgUrl: projImg6,
    },

    {
      title: "Line Follower",
      description: "IR Sensors, follows the dark",
      imgUrl: projImg7,
    },
    {
      title: "Robo Race",
      description: "Who will win the game ",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Events</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Venue</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Location</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Venue Of The Event</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Location</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/*<img className="background-image-right" src={colorSharp2}></img>*/}
    </section>
  )
}
