import { useEffect, useState } from "react";
import "./ProjectDetails.scss";
import experiencesData from "./personalProjects.json";

interface ExperienceType {
  id: string;
  title: string;
  introduction: string;
  sections: Section[];
}

interface Section {
  title: string;
  description: string;
  image: string;
}

interface ProjectDetailsProps {
  experienceId: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  experienceId,
}: ProjectDetailsProps) => {
  const MOBILE_SIZE_MAX = 1024;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_SIZE_MAX
  );
  const [experience, setExperience] = useState<ExperienceType | null>(null);

  useEffect(() => {
    setExperience(
      experiencesData.find((exp) => exp.id === experienceId) || null
    );

    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_SIZE_MAX);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [experienceId]);

  return (
    <div className="ProjectDetails">
      <h2>{experience?.title}</h2>
      <p className="introduction">{experience?.introduction}</p>
      <div className="sections">
        {isMobile
          ? experience?.sections.map((section, index) => {
              return (
                <div key={section.title} className="section">
                  <>
                    <img className="image" src={section.image}></img>
                    <div className="description">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                    </div>
                  </>
                </div>
              );
            })
          : experience?.sections.map((section, index) => {
              return (
                <div key={section.title} className="section">
                  {index % 2 === 0 ? (
                    <>
                      <img className="image" src={section.image}></img>
                      <div className="description">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="description">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                      <img className="image" src={section.image}></img>
                    </>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ProjectDetails;
