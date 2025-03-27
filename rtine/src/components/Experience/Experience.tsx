import { useState, useEffect } from "react";
import "./Experience.scss";
import experiencesData from "../../data/experiences.json";

type Experience = {
  id: string;
  title: string;
  company: string;
  description: string;
  sections: Section[];
};

type Section = {
  title: string;
  items?: string[];
  subsections?: Subsection[];
};

type Subsection = {
  title: string;
  items: string[];
};

type ExperienceProps = {
  experienceId: string;
};

const Experience: React.FC<ExperienceProps> = ({ experienceId }) => {
  const [experience, setExperience] = useState<Experience | null>(null);

  useEffect(() => {
    setExperience(
      experiencesData.find((exp) => exp.id === experienceId) || null
    );
  }, [experienceId]);

  if (!experience) return <p>Loading...</p>;

  return (
    <section className="experience-container">
      <h2 className="experience-company">{experience.company}</h2>
      <h3 className="experience-title">{experience.title}</h3>
      <p className="experience-description">{experience.description}</p>

      {experience.sections.map((section, index) => (
        <div key={index} className="experience-section">
          <h3 className="experience-heading">{section.title}</h3>

          {section.items && (
            <ul className="experience-list">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )}

          {section.subsections && (
            <div className="experience-subsections">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="experience-subsection">
                  <h4 className="experience-subheading">{subsection.title}</h4>
                  <ul className="experience-list">
                    {subsection.items.map((subItem, subItemIndex) => (
                      <li key={subItemIndex}>{subItem}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
