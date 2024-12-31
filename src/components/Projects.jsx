import { useState } from "react";
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
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Blogging Sphere",
      description:
        "A website for sharing thoughts and discovering different ideas",
      imgUrl: l1,
      extraInfo:
        " A website for sharing thoughts and discovering different ideas ,This platform allows users to create, share, and explore blogs on various topics.",
    },
    {
      title: "Porsche Cars",
      description: "A website for booking Porsche cars and buying them",
      imgUrl: l2,
      extraInfo:
        "Users can book their favorite Porsche models, customize them, and view pricing details.",
    },
    {
      title: "Fitness Gym",
      description: "A mobile app for gym info and personal training routines",
      imgUrl: l3,
      extraInfo:
        "mobile app for gym info and Helps users track their fitness routines, monitor progress, and find gyms nearby.",
    },
    {
      title: "Market Place",
      description: "A mobile app for buying clothes, electronics, and more!",
      imgUrl: l4,
      extraInfo:
        "A one-stop marketplace where users can purchase and sell a variety of productsand for buying clothes, electronics, and more!.",
    },
    {
      title: "To-Do List",
      description: "A mobile app for saving tasks",
      imgUrl: l5,
      extraInfo:
        "Helps users organize their tasks, set reminders, and increase productivity.",
    },
    {
      title: "World News",
      description: "A website for daily news from all over the world",
      imgUrl: l6,
      extraInfo:
        "A website for daily news from all over the world and Provides the latest news, updates, and trending stories from around the globe.",
    },
    {
      title: "Game Valley",
      description: "A website for games",
      imgUrl: l7,
      extraInfo:
        "An online platform for discovering new games, including reviews and ratings.",
    },
    {
      title: "Movies World",
      description: "A website for movies like IMDB:)",
      imgUrl: l8,
      extraInfo:
        "Browse movies, read reviews, watch trailers, and find ratings of the latest films for movies like IMDB:).",
    },
    {
      title: "Calculator",
      description: "An app for logic operations",
      imgUrl: l10,
      extraInfo:
        "A simple yet effective calculator for various mathematical and logical operations.",
    },
    {
      title: "Stopwatch",
      description: "A timer application",
      imgUrl: l11,
      extraInfo:
        "Keep track of time with a simple stopwatch, with options for multiple timers.",
    },
    {
      title: "Dashboard",
      description: "A dashboard template for React projects",
      imgUrl: l12,
      extraInfo:
        "A customizable, responsive dashboard template built with React.",
    },
    {
      title: "My Portfolio",
      description: "Popa's profile",
      imgUrl: l9,
      extraInfo:
        "This is a portfolio website showcasing my projects, skills, and achievements.",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

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
                  <h2>
                    {selectedProject ? selectedProject.title : "My Projects"}
                  </h2>
                  {selectedProject ? (
                    <div>
                      <button className="btn-back" onClick={handleBackClick}>
                        Return to Projects
                      </button>
                      <ProjectCard {...selectedProject} />
                      <div className="extra-info">
                        <h3>More About The Project</h3>
                        <p>{selectedProject.extraInfo}</p>
                      </div>
                    </div>
                  ) : (
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project)}
                              />
                            ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background design"
      />
    </section>
  );
};
