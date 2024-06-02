import React, { FC, useState } from 'react';
import './Project.scss';
import Detail from '../Detail/Detail';
import '../../constants/index'
import { PROJECTS_IMAGE } from '../../constants/data';

interface ProjectProps {
  obj: any;
}

const Project: FC<ProjectProps> = ({ obj }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const title: string = obj.title;
  const description: string = obj.description;
  const img = PROJECTS_IMAGE[title as keyof typeof PROJECTS_IMAGE];
  return (
    <div className="Project" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <img src={img} alt="" width="100%" height="100%"/>
      {hover &&
        <Detail tags={obj.tags} title={title} description={description}/>
      }
    </div>
  );
};

export default Project;
