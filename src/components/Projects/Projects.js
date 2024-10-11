import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import support from "../../Assets/support.jpeg"
import calculator from "../../Assets/calculator.jpeg"
import learning from "../../Assets/learning.jpeg"
import list from "../../Assets/list.jpeg"
import admin from "../../Assets/admin.jpeg"
import PrivateChat from "../../Assets/zomato.jpeg";
import tripute from "../../Assets/tripute.jpeg";
import Portfolio from "../../Assets/portfolio-image.jpeg";
import Ecart from "../../Assets/Projects/ecart.png";


import "./project.css"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={learning}
              title="Learning Dashboard (MERN)"
              description="This is a fully functional education website that uses React.js + Bootstrap and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/sathish-entri/E-learning-dashboard.git"
              demoLink="https://github.com/sathish-entri/E-learning-dashboard.git"
            />
          </Col>
 
        
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={support}
              title="Support Team Dashboard (MERN)"
              description="The Support Team Dashboard is a MERN Stack project where employees raise tickets, the support team resolves them,and admin manage ticket counts and statuses"    
              demoLink="https://github.com/sathish-entri/Support-Dashboard.git"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Zomato Clone (MERN)"
              description="Zomato clone build with react.js, css, and bootstrap frend end and node.js express,js back end and mongodb database, it's have many features like cusines and food type based on restarent filtering"    
              demoLink="https://github.com/sathish-entri"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              title="Admin Panel (MERN)"
              description="The  Admin Panel enables the management of employee details with full CRUD (Create, Read, Update, Delete) operations for efficient data handling."    
              demoLink="https://github.com/sathish-entri/Admin-Panel-Mern.git"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website (REACT)"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website and im mention my skills set and my project."
              ghLink="https://github.com/sathish-entri/portfolio"
              demoLink="https://sathish-entri.github.io/portfolio/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card" >
            <ProjectCard
              imgPath={list}
              title="To-Do-List (REACT)"
              description="The To-Do List using React is a web application that allows users to add, edit, delete, and mark tasks as completed, providing a simple interface for task management."
              ghLink="https://github.com/sathish-entri/To-do-list.git"
              demoLink="https://github.com/sathish-entri"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              title="Calculator (JS)"
              description="The Calculator using vanilla JavaScript is a simple web application that performs basic arithmetic operations through user input without relying on any external libraries."
              ghLink="https://github.com/sathish-entri/calculator.git"
              demoLink="https://github.com/sathish-entri/calculator.git"

            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={tripute}
              title="Tripute Page (html/css)"
              description="The Tribute Page using only HTML and CSS is a static web page designed to honor a person or topic, showcasing images, quotes, and information in a visually appealing layout without any interactive features."
              ghLink="https://github.com/sathish-entri/TriputePage-html-css.git"
              demoLink="https://github.com/sathish-entri/TriputePage-html-css.git"

            />
          </Col>
      
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
