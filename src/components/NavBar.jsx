import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <p className="navbar-brand-text">Popa's Profile</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/ahmed-mahmoud-07625b306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmahmoudsalam12@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="gmail-icon"
                    src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png"
                    alt="Gmail"
                  />
                </a>

                <a
                  href="https://www.facebook.com/ahmed.popa.142?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/ahmedpopa_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
