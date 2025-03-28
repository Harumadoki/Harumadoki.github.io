import "./Project.scss";
import "../../constants/index";
import { PROJECTS_IMAGE, PERSONAL_PROJECTS_IMAGE } from "../../constants/data";
import Detail from "../Detail/Detail";
import { useState } from "react";

interface Card {
  title: string;
  img: string;
  tags: string[];
  lien: string;
  description: string;
}
interface ProjectProps {
  obj: Card;
  isPersonal?: boolean;
}

const Project = ({ obj, isPersonal }: ProjectProps) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  const imgList = isPersonal ? PERSONAL_PROJECTS_IMAGE : PROJECTS_IMAGE;
  const img = imgList[obj.title as keyof typeof imgList];
  return (
    <div className="Project" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <img className="image" src={img} alt="" />
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
