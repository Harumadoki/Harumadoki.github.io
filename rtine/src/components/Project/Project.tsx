import React, { FC } from 'react';
import { ProjectWrapper } from './Project.styled';

interface ProjectProps {}

const Project: FC<ProjectProps> = () => (
 <ProjectWrapper data-testid="Project">
    Project Component
 </ProjectWrapper>
);

export default Project;
