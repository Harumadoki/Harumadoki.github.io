import React, { FC } from "react";
import "./Detail.scss";

interface DetailProps {
  tags: string[];
  title: string;
  description: string;
}

const Detail: FC<DetailProps> = ({ tags, title, description }) => {
  return (
    <div className="Detail">
      {
        <div className="container">
          <p className="title">{title}</p>
          <div className="go-to-project">See details ➜</div>
        </div>
      }
    </div>
  );
};

export default Detail;
