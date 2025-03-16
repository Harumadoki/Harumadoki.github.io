import React, { FC } from "react";
import "./About.scss";
import "../../constants/index";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="About">
    <div className="resume">
      <h2>RASOANAIVO Heritiana / Software developer</h2>
      <p>
        <strong>Full Stack developer (Angular, .Net) -</strong> Omnilog
      </p>
      <p>
        <em>Paris, France | September 2023 - October 2024</em>
      </p>
      <p>Client TF1:</p>
      <p>&bull; TF1 is the number one TV channel in France</p>
      <p>
        &bull; Developed and maintained a web application enabling journalists
        to
      </p>
      <p>research, edit, and share documents and videos (Angular, .NET)</p>
      <p>
        &bull; Modernized an old thick-client application by transitioning it to
        a thin-client
      </p>
      <p>web application</p>
      <p>&bull; Troubleshot and resolved front-end and back-end issues</p>
      <p>
        &bull; Implemented key features, including HTML video manipulation and a
        new
      </p>
      <p>form-based page in collaboration with the UX/UI team (Figma)</p>
      <p>&bull; Refactored legacy code to align with SOLID principles</p>
      <p>&bull; Developed and implemented a REST API</p>
      <p>&bull; Deployed the project on AWS using Elastic Container Service</p>
      <p>&bull; Conducted front-end testing with Cypress</p>
      <p>
        &bull; Contributed to the design system and collaborated with the UX
        team to
      </p>
      <p>enhance the component library</p>
      <p>
        &bull; Worked within an Agile Scrumban framework (hybrid of Scrum and
      </p>
      <p>Kanban)</p>
      <p>
        &bull; Joined a team consisting of a project manager and two senior
        developers.
      </p>
      <p>
        &bull; Assisted in the initial deployment of the application to early
        users
      </p>

      <br />

      <p>
        <strong>Full Stack developer (React, .Net) -</strong> Sopra Steria
      </p>
      <p>
        <em>Lyon, France | October 2020 &ndash; January 2023</em>
      </p>
      <p>Client Elengy:</p>
      <p>&bull; Elengy specializes in Liquefied Natural Gas (LNG)</p>
      <p>&bull; Developed and maintained a web application for managing and</p>
      <p>calculating gas stock between clients and terminals in France</p>
      <p>
        &bull; Led the project for six months, conducting client meetings to
        discuss
      </p>
      <p>project evolution and demonstrating the application</p>
      <p>
        &bull; Prepared quotations and technical specifications for requested
        features
      </p>
      <p>&bull; Modified data with SQL scripts</p>
      <p>
        &bull; Mentor and guided an intern through various development tasks
      </p>
      <p>&bull; Understood the context to add and modify calculation tables</p>
      <p>&bull; Implemented a feature to download tables as PDFs</p>
    </div>
  </div>
);

export default About;
