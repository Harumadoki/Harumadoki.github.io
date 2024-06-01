import React, { FC } from 'react';
import './Header.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className="Header">
    <h1>Rtine</h1>
    <ul>
      <li><a href="">About</a></li>
      <li><a href="">Work</a></li>
    </ul>

    <div className="SocialNetwork">
      <p>Insta</p>
      <p>Linkedin</p>
    </div>
  </div>
);

export default Header;
