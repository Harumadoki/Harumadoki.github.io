import React, { FC, useState } from 'react';
import './Project.scss';
import Detail from '../Detail/Detail';

interface ProjectProps {
  obj: any;
}

const loadImage = {
  "Test1": require("../../assets/projectsImage/test.png"),
  "Test2": require("../../assets/projectsImage/dbz.jpg"),
  "Test3": require("../../assets/projectsImage/dbz.jpg"),
  "Test4": require("../../assets/projectsImage/leventseleve.jpeg"),
};

const Project: FC<ProjectProps> = ({ obj }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const title: string = obj.title;
  const img = loadImage[title as keyof typeof loadImage];
  return (
    <div className="Project" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <img src={img} alt="" width="100%" height="100%"/>
      {hover &&
        <Detail tags={obj.tags} title={title} />
      }
    </div>
  );
};

export default Project;
