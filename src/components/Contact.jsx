import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center mb-5">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About Me</h2>
                  <h3>
                    Hello! I'm Ahmed Mahmoud, a passionate developer with
                    expertise in building modern, responsive web applications
                    And Mobile Applications. I enjoy solving challenging
                    problems and creating intuitive designs. Feel free to reach
                    out if you have any questions or opportunities to
                    collaborate!
                  </h3>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmahmoudsalam12@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="contact-gmail-btn">
                      Contact me on Gmail
                    </button>
                  </a>
                  <h2>My CV</h2>
                  <a
                    href="https://drive.google.com/file/d/1tGcS1XZfL5YLs3_n0FUeoViHOh3y-h96/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="contact-gmail-btn">Click Here</button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
