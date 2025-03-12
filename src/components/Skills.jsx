/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaReact,
  FaReact as FaReactNative,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiFigma,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>My Skills</h2>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="Mobile Development" />
                    <h5>Mobile Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Web Development" />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Back-End" />
                    <h5>Back-End</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="UI/UX" />
                    <h5>UI/UX</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="SQL" />
                    <h5>SQL</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-image-left"
          src={colorSharp}
          alt="Background"
        />
      </section>

      <section className="tech-stack" id="tech-stack">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tech-stack-box wow fadeIn">
                <div
                  className="tech-icons"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <FaHtml5 size={50} color="#E34F26" />
                    <h5>HTML</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <FaCss3Alt size={50} color="#1572B6" />
                    <h5>CSS</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <SiJavascript size={50} color="#F7DF1E" />
                    <h5>JavaScript</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <SiMysql size={50} color="#4479A1" />
                    <h5>SQL</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <SiFigma size={50} color="#F24E1E" />
                    <h5>Figma</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <FaGithub size={50} color="#FFFF" />
                    <h5>GitHub</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <FaReact size={50} color="#61DAFB" />
                    <h5>React</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <FaReactNative size={50} color="#61DAFB" />
                    <h5>React Native</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <SiFirebase size={50} color="#FFCA28" />
                    <h5>Firebase</h5>
                  </div>
                  <div
                    className="tech-item"
                    style={{ margin: "1rem", textAlign: "center" }}
                  >
                    <SiMongodb size={50} color="#47A248" />
                    <h5>MongoDB</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
