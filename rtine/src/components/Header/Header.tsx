import React, { FC } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';


interface HeaderProps {}

const Header: FC<HeaderProps> = () => {

  return (
    <div className="Header">
      <h1>Rtine</h1>
      <ul>
        <li><a className='link' href="/about">About</a></li>
        <li><a className='link' href="/projects">Projects</a></li>
      </ul>
      <div className="SocialNetwork">
        {/* <img src={require("../../assets/instagram.png")} alt="" width="50" height="50"/> */}
        <a href="https://www.linkedin.com/in/heritiana-rasoanaivo-241149158/" target="_blank" rel="noopener noreferrer"><input type='image' src={require("../../assets/linkedin.png")} alt="" width="50" height="50"/></a>
      </div>
    </div>
  )
};

export default Header;
