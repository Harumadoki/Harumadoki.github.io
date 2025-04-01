import { useEffect, useState } from "react";
import "./ProjectDetails.scss";
import experiencesData from "./test.json";

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
  const [experience, setExperience] = useState<ExperienceType | null>(null);

  useEffect(() => {
    setExperience(
      experiencesData.find((exp) => exp.id === experienceId) || null
    );
  }, [experienceId]);

  return (
    <div className="ProjectDetails">
      <h2>{experience?.title}</h2>
      <p className="introduction">{experience?.introduction}</p>
      <div className="sections">
        {experience?.sections.map((section, index) => {
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
