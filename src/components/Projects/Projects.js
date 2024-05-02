import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Youtube from "../../Assets/Projects/youtubec.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import Gmeeting from "../../Assets/Projects/G-meeting.jpg";
import Snapgram from "../../Assets/Projects/Snapgram.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import Threads from "../../Assets/Projects/Threads.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snapgram}
              isBlog={false}
              title="Social media App"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Clinton-Gilly/Social_media_app.git"
              demoLink="https://social-media-app-sepia-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Threads}
              isBlog={false}
              title="Threads App"
              description="A social media app build with React.js, Node.js, Express.js, MongoDB and Socket.io. Supports real-time messaging, image sharing, and reactions on messages. The app is deployed on Vercel."
              ghLink="https://github.com/Clinton-Gilly/Threands_app.git"
              demoLink="https://threands-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gmeeting}
              isBlog={false}
              title="G-meerting"
              description="A video conferencing app build with React.js, Node.js, Socket.io and Peer.js. Supports video and audio calling, screen sharing and chat feature. The app is deployed on Heroku."
              ghLink="https://github.com/Clinton-Gilly/GMeeting.git"
              demoLink="https://g-meeting.vercel.app/"              
            />
          </Col>

          <Col md={4} className="G-Tube">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube Clone"
              description="Youtube clone build with React.js, Material-UI, and Firebase. Supports video streaming, user authentication, and video upload. The app is deployed on Vercel."
              ghLink="https://github.com/Clinton-Gilly/YouTube-clone.git"
              demoLink="https://you-tube-clone-tan.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
    
  );
}

export default Projects;
