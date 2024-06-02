import React, { FC } from 'react';
import './About.scss';
import '../../constants/index';
import { EXPERIENCE } from '../../constants/constants';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className="About">
    About Component
    {EXPERIENCE.Omnilog}
  </div>
);

export default About;
