/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import l1 from "../assets/img/l1.png";
import l2 from "../assets/img/l2.png";
import l3 from "../assets/img/l3.png";
import l4 from "../assets/img/l4.png";
import l5 from "../assets/img/l5.png";
import l6 from "../assets/img/l6.png";
import l7 from "../assets/img/l7.png";
import l8 from "../assets/img/l8.png";
import l9 from "../assets/img/l9.png";
import l10 from "../assets/img/l10.jpg";
import l11 from "../assets/img/l11.jpg";
import l12 from "../assets/img/l12.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Blogging Sphere",
      description: "a website for shaing thoughts and discover diffirent ideas",
      imgUrl: l1,
    },
    {
      title: "Porsche cars",
      description: "a website for booking Porsche cars and buying it",
      imgUrl: l2,
    },
    {
      title: "Fittness Gym",
      description: "a Moblie app for gym info and personal training routines",
      imgUrl: l3,
    },
    {
      title: "Market Place",
      description: " a Mobile app for buying clothes,ELectronics and more!",
      imgUrl: l4,
    },
    {
      title: "ToDoList",
      description: "a mobile app for saving tasks",
      imgUrl: l5,
    },
    {
      title: "World News",
      description: "a website for daily news all over the world",
      imgUrl: l6,
    },
    {
      title: "Game Valley",
      description: "a website for games",
      imgUrl: l7,
    },
    {
      title: "Movies World",
      description: "a website for movies like IMDB:)",
      imgUrl: l8,
    },
    {
      title: "Calculator",
      description: "an app for logic operation",
      imgUrl: l10,
    },
    {
      title: "Stopwatch",
      description: "a timer application",
      imgUrl: l11,
    },
    {
      title: "Dashboard",
      description: "Dashboard temp for react project",
      imgUrl: l12,
    },
    {
      title: "My Protfolio",
      description: "popa profile",
      imgUrl: l9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
