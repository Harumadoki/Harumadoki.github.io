import React, { FC } from "react";
import "./ThreeDimensionalProjects.scss";
import Gameboy3dModel from "../Gameboy3dModel/Gameboy3dModel";

interface ThreeDimensionalProjectsProps {}

const ThreeDimensionalProjects: FC<ThreeDimensionalProjectsProps> = () => (
  <div className="ThreeDimensionalProjects">
    <div className="gameboy">
      <div className="gameboy-3dmodel">
        <Gameboy3dModel />
      </div>
    </div>
  </div>
);

export default ThreeDimensionalProjects;
