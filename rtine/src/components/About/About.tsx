import React, { FC } from "react";
import "./About.scss";
import "../../constants/index";

interface AboutProps {}

const OtherPartsResume = () => {
  return (
    <div className="resume-section-other">
      <h3>Skills</h3>
      <ul>
        <li>Frontend: React (JavaScript), Angular (TypeScript)</li>
        <li>Backend: Java Spring Boot, .NET (C#)</li>
        <li>Testing: Cypress, Jest</li>
        <li>Database: SQL, DynamoDB</li>
        <li>Version Control & DevOps: Git, AWS (ECS, etc.)</li>
        <li>Methodologies: Agile (Scrum, Scrumban)</li>
      </ul>

      <h3>Languages</h3>
      <ul>
        <li>French: Native</li>
        <li>English: Business (TOEIC 920)</li>
        <li>Japanese: Daily conversational</li>
      </ul>

      <h3>Interests</h3>
      <ul>
        <li>Volleyball (Competition)</li>
        <li>Graphic Design</li>
      </ul>

      <h3>Formation</h3>
      <p>
        <strong>Master Degree</strong> - Technology of Information and Web
        development
      </p>
      <p>Université Claude Bernard Lyon 1, Lyon France | 2016 -2021</p>
    </div>
  );
};

const SopraResume = () => {
  return (
    <div className="resume-section">
      <h3>Full Stack Developer (React, .Net) - Sopra Steria</h3>
      <p>
        <strong>Lyon, France | October 2020 – January 2023</strong>
      </p>
      <p>
        <strong>Client: Elengy</strong>
      </p>
      <p>Elengy specializes in Liquefied Natural Gas (LNG).</p>
      <ul>
        <li>
          Developed and maintained a web application for managing and
          calculating gas stock between clients and terminals in France.
        </li>
        <li>
          Led the project for six months, conducting client meetings to discuss
          project evolution and demonstrating the application.
        </li>
        <li>
          Prepared quotations and technical specifications for requested
          features.
        </li>
        <li>Modified data with SQL scripts.</li>
        <li>
          Mentored and guided an intern through various development tasks.
        </li>
        <li>Understood the context to add and modify calculation tabs.</li>
      </ul>
    </div>
  );
};

const Omnilog_Resume = () => {
  return (
    <div className="resume-section">
      <h3>Full Stack Developer (Angular, .Net) - Omnilog</h3>
      <p>
        <strong>Paris, France | September 2023 - October 2024</strong>
      </p>
      <p>
        <strong>Client: TF1</strong>
      </p>
      <p>TF1 is the number one TV channel in France.</p>
      <ul>
        <li>
          Developed and maintained a web application enabling journalists to
          research, edit, and share documents and videos (Angular, .NET).
        </li>
        <li>
          Modernized an old thick-client application by transitioning it to a
          thin-client web application.
        </li>
        <li>Troubleshot and resolved front-end and back-end issues.</li>
        <li>
          Implemented key features, including HTML video manipulation and a new
          form-based page in collaboration with the UX/UI team (Figma).
        </li>
        <li>Refactored legacy code to align with SOLID principles.</li>
        <li>Developed and implemented a REST API.</li>
        <li>Deployed the project on AWS using Elastic Container Service.</li>
        <li>Conducted front-end testing with Cypress.</li>
        <li>
          Contributed to the design system and collaborated with the UX team to
          enhance the component library.
        </li>
        <li>
          Worked within an Agile Scrumban framework (hybrid of Scrum and
          Kanban).
        </li>
        <li>
          Joined a team consisting of a project manager and two senior
          developers.
        </li>
        <li>
          Assisted in the initial deployment of the application to early users.
        </li>
      </ul>
    </div>
  );
};

const About: FC<AboutProps> = () => (
  <div className="About">
    <h2>Frontend developer</h2>
    <div className="resume-container">
      <Omnilog_Resume />
      <SopraResume />
    </div>
    <OtherPartsResume />
    <br />
  </div>
);

export default About;
