import Experience from "../Experience/Experience";
import "./ProfessionalExperiences.scss";

const ProfessionalExperiences = () => {
  return (
    <div className="ProfessionalExperiences">
      <div className="scrollable-experience">
        <Experience experienceId="tf1" />
      </div>
      <div className="scrollable-experience">
        <Experience experienceId="elengy" />
      </div>
    </div>
  );
};

export default ProfessionalExperiences;
