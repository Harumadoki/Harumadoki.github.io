import React, { FC } from "react";
import "./About.scss";
import "../../constants/index";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="About">
    <div className="resume">
      <h2>RASOANAIVO Heritiana / Software developer</h2>
      <p>
        <strong>Software Developer - Frontend -</strong> Omnilog - client TF1
      </p>
      <p>
        <em>Paris, France | September 2023 &ndash; October 2024</em>
      </p>
      <p>Tasks:</p>
      <p>
        <span>&bull;&nbsp;</span>Developing an application for journalist that
        indexes all previous articles,
      </p>
      <p>videos and documents of TF1 (React, Spring Boot)</p>
      <p>
        <span>&bull;&nbsp;</span>E2E test with Cypress
      </p>
      <p>
        <span>&bull;&nbsp;</span>Contribution with the design system / UX team
        for a library
      </p>
      <br />
      <p>
        <strong>Software Developer - Full Stack -</strong> Sopra Steria - client
        EDF
      </p>
      <p>
        <em>Lyon, France | September 2022 &ndash; January 2023</em>
      </p>
      <p>Tasks:</p>
      <p>
        <span>&bull;&nbsp;</span>Developing and maintaining an application park
        with high criticality
      </p>
      <p>(React / Spring Boot)</p>
      <p>
        <span>&bull;&nbsp;</span>Developing with the Agile method
      </p>
      <p>
        <span>&bull;&nbsp;</span>Understanding the domain of electricity
      </p>
      <br />
      <p>
        <strong>Software Developer - Full Stack -</strong> Sopra Steria - client
      </p>
      <p>Elengy</p>
      <p>
        <em>Lyon, France | September 2020 &ndash; September 2022</em>
      </p>
      <p>Tasks:</p>
      <p>
        <span>&bull;&nbsp;</span>Developing a solution for our client to manage
        their structure
      </p>
      <p>(React / Spring Boot / SQL)</p>
      <p>
        <span>&bull;&nbsp;</span>Discussing with the client about the evolution
        of the project
      </p>
      <p>
        <span>&bull;&nbsp;</span>Preparing quotation about the evolution
        requested by the client
      </p>
      <p>(conception)</p>
      <p>
        <span>&bull;&nbsp;</span>Responsibility of maintaining and developing
        the application with the
      </p>
      <p>client (in team and alone)</p>
      <p>
        <span>&bull;&nbsp;</span>Respect the delay of a delivery
      </p>
    </div>
  </div>
);

export default About;
