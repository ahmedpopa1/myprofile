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
import l9 from "../assets/img/l9.jpg";
import l10 from "../assets/img/l10.jpg";
import l11 from "../assets/img/l11.jpg";
import l12 from "../assets/img/l12.png";
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
        "A dynamic platform designed for sharing thoughts and discovering diverse perspectives. Users can create, edit, and delete blogs, explore a wide range of topics, and interact with other users by discovering their content. The platform is built with React.js for a seamless user experience and MongoDB to efficiently manage and store user data. Features include searching blogs by tags, usernames, or content, visiting user profiles, and copying content for inspiration, making it a comprehensive hub for creative expression.",
    },
    {
      title: "Qatra",
      description: "My graduation project",
      imgUrl: l12,
      link: "https://expo.dev/artifacts/eas/6cyGkdTUbRTRTp89eBC65G.apk",
      extraInfo:
        "Qatra:  is a graduation project designed to tackle critical delays in blood donation access within the healthcare system. It introduces a smart, integrated platform that connects blood banks, donors, and recipients (via doctors) to streamline communication and ensure timely blood availability. By enabling donors to register and receive notifications when their blood type is needed, and allowing doctors to request blood units efficiently, Qatra aims to save lives through technology. The project addresses challenges like lack of awareness and unstructured communication, fostering a more reliable and transparent donation process while encouraging greater participation from donors.",
    },
    {
      title: "Porsche Cars",
      description: "A website for booking Porsche cars and buying them",
      imgUrl: l2,
      link: "https://ahmedpopa1.github.io/poarschecars/",
      extraInfo:
        "An interactive platform for Porsche enthusiasts to explore, customize, and book their favorite models. Users can browse a wide selection of Porsche cars, customize features like color and interiors, view detailed pricing information, and book test drives. The website offers a seamless experience built with React.js for an engaging user interface and MongoDB for secure and efficient data management. Whether you're purchasing a Porsche or simply exploring options, this platform provides everything you need to make an informed decision.",
    },

    {
      title: "Fitness Gym",
      description: "A mobile app for gym info and personal training routines",
      imgUrl: l3,
      extraInfo:
        "A comprehensive mobile app designed to enhance your fitness journey. Users can track their personal training routines, monitor workout progress, and set fitness goals. The app provides detailed information about nearby gyms, including amenities, class schedules, and membership options. It also features personalized workout plans tailored to individual needs, progress tracking with visual insights, and notifications to keep users motivated. Built with React Native for cross-platform compatibility and Firebase for secure data storage and real-time updates, this app is your ultimate fitness companion.",
    },
    {
      title: "Market Place",
      description: "A mobile app for buying clothes, electronics, and more!",
      imgUrl: l4,
      link: "https://expo.dev/artifacts/eas/biPt6LEA95usHX68y6jT22.apk",
      extraInfo:
        "A versatile mobile app designed as a one-stop marketplace for users to buy and sell a wide range of products, including clothes, electronics, accessories, and more. The app offers a seamless shopping experience with features like product search, category filtering, and secure checkout. Sellers can easily list their items with images and descriptions, while buyers can browse deals and track their orders in real-time. Built with React Native for a smooth cross-platform experience and Firebase for secure user authentication and efficient product data management, this app is the ultimate shopping destination at your fingertips.",
    },
    {
      title: "To-Do List",
      description: "A mobile app for saving tasks",
      imgUrl: l5,
      extraInfo:
        "A productivity-focused mobile app designed to help users organize their daily tasks and stay on top of their schedules. Users can create task lists, set deadlines, and enable reminders to ensure nothing is overlooked. The app also supports prioritization, allowing users to categorize tasks by importance. With a clean and intuitive interface, it’s easy to add, edit, and mark tasks as complete. Built with React Native for a smooth cross-platform experience and Firebase for secure and real-time task management, this app is the perfect tool for boosting productivity and achieving goals.",
    },
    {
      title: "World News",
      description: "A website for daily news from all over the world",
      imgUrl: l6,
      extraInfo:
        "A dynamic website delivering the latest news, updates, and trending stories from around the globe. Users can browse news across various categories such as politics, technology, entertainment, sports, and more. The platform is designed to provide real-time updates and ensure users stay informed with accurate and relevant information. Features include search functionality, article bookmarking, and personalized news recommendations. Built with React.js for a responsive user experience and MongoDB for efficient data storage, this website is your go-to source for staying updated on global events.",
    },
    {
      title: "Game Valley",
      description: "A website for games",
      imgUrl: l7,
      link: "https://ahmedpopa1.github.io/gamevalley/",
      extraInfo:
        "An exciting online platform for gaming enthusiasts to discover, explore, and stay updated on the latest games. Users can browse a curated collection of games across various genres, read detailed reviews, check player ratings, and access gameplay trailers. The platform also features a user-friendly interface for searching and filtering games by category, release date, or popularity. Built with React.js for an engaging and responsive user experience, and MongoDB for secure and scalable data management, this website is the ultimate hub for gamers to connect and discover their next adventure.",
    },
    {
      title: "Wallet Tracker",
      description: "Wallet tracker app",
      imgUrl: l9,
      extraInfo:
        "This is a user-friendly application built with React Native and Firebase. The app allows users to manage their daily expenses by recording them in real time. Users can enter their starting balance for the day, add detailed expense entries with descriptions, and track their remaining balance effortlessly. Firebase is used to securely store user data and ensure seamless updates across devices. The app is designed to simplify expense management and promote financial awareness.",
    },
    {
      title: "Movies World",
      description: "A website for movies like IMDB :)",
      imgUrl: l8,
      link: "https://ahmedpopa1.github.io/imdb/",
      extraInfo:
        "An immersive website for movie lovers to browse an extensive collection of films, read insightful reviews, watch trailers, and explore detailed ratings. Users can search for movies by genre, release date, cast, and more. The platform provides comprehensive information on each movie, including synopses, cast details, reviews, and user-generated ratings. Built with React.js for a fast and interactive user experience and MongoDB for efficient data storage and management, this site is your go-to destination for everything related to movies.",
    },
    {
      title: "Calculator",
      description: "An app for logic operations",
      imgUrl: l10,
      link:"https://expo.dev/artifacts/eas/eYhsSvY7p62U3vAiYyRseV.apk",
      extraInfo:
        "A simple yet powerful calculator designed for performing a wide range of mathematical and logical operations. Users can easily perform basic arithmetic, advanced calculations, and logical expressions with a clean, intuitive interface. The app also includes features like history tracking and the ability to save frequent calculations. Built with React Native for a seamless experience across platforms, and Firebase for storing calculation history and settings, this app provides an efficient tool for both everyday users and professionals alike.",
    },
    {
      title: "Stopwatch",
      description: "A timer application",
      imgUrl: l11,
      link:"https://expo.dev/artifacts/eas/sekdMma53Bs96DvF1XqXWu.apk",
      extraInfo:
        "A versatile and easy-to-use stopwatch app designed to help users keep track of time efficiently. With options for multiple timers, users can manage different activities simultaneously, perfect for workouts, cooking, or any task requiring precise time tracking. The app features intuitive controls, start/stop functionality, and reset options. Built with React Native for smooth performance across platforms and Firebase for storing timer data and settings, this app provides a reliable solution for anyone needing to measure time accurately.",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 1);
  };

  const handleBackClick = (projectId) => {
    setSelectedProject(null);
    setTimeout(() => {
      const element = document.getElementById(projectId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
                      <button
                        className="btn-back"
                        onClick={() =>
                          handleBackClick(
                            selectedProject.title.replace(/\s+/g, "-")
                          )
                        }
                      >
                        Return to Projects
                      </button>
                      <ProjectCard {...selectedProject} />
                      <div className="extra-info">
                        <h3>More About The Project</h3>
                        <p className="extra-info">
                          {selectedProject.extraInfo}
                        </p>
                      </div>
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          {...(selectedProject.link.endsWith(".apk")
                            ? { download: true }
                            : {})}
                        >
                          {selectedProject.link.endsWith(".apk")
                            ? "📦 Download APK"
                            : "👉 Visit the Live Project"}
                        </a>
                      )}
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
                                id={project.title.replace(/\s+/g, "-")}
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
