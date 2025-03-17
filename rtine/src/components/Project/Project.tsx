import React, { FC, useState } from "react";
import "./Project.scss";
import Detail from "../Detail/Detail";
import "../../constants/index";
import { PROJECTS_IMAGE } from "../../constants/data";

interface Card {
  title: string;
  img: string;
  tags: string[];
  lien: string;
  description: string;
}
interface ProjectProps {
  obj: Card;
}

const Project = ({ obj }: ProjectProps) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const img = PROJECTS_IMAGE[obj.title as keyof typeof PROJECTS_IMAGE];
  return (
    <div className="Project" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <img src={img} alt="" width="100%" height="100%" />
      {hover && (
        <Detail
          key={obj.lien}
          tags={obj.tags}
          title={obj.title}
          description={obj.description}
        />
      )}
    </div>
  );
};

export default Project;
