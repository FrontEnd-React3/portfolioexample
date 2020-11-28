import React, { useEffect } from "react";
import sal from "sal.js";
import "./App.css";
import "sal.js/dist/sal.css";
import "./Tooltip.css";
import online from "./online.svg";
import Intro from "./Intro";
import Kaizen from "./Kaizen";
import Portfoliotitle from "./Portfoliotitle";
import { motion } from "framer-motion";
import PRL from "./PRL";
import ThemeContext, { kaizentext } from "./themecontext";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function App() {
  useEffect(sal, []);
  return (
    <div className="App">
      <div className="App__background">
        <div className="App__navbackground App__centerflex">
          <img className="App__navsvg" src={online} alt="online" />
        </div>

        <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Garrett Love</Navbar.Brand>

              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} /> */}
            {/* <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} /> */}

            {/* <Footer /> */}
          </Container>
        </Router>

        <PRL />

        <div className="App__centerflex">
          <motion.div
            className="App__firstbackground"
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: "50",
              duration: "1",
              delay: "0.5"
            }}
          >
            <Intro />
          </motion.div>

          <div className="App__secondbackground">
            <ThemeContext.Provider value={kaizentext.lightgraytext}>
              <Kaizen />
            </ThemeContext.Provider>
          </div>

          <div className="App__thirdbackground">
            <div className="PF__pfconttitle">
              <Portfoliotitle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
