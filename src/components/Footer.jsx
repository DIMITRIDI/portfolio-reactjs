import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
   return (
      <footer className='footer'>
         <div className='footer__logo'>DIMITRIDIS</div>
         <ul className="permalinks">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#contact'>Contact </a></li>
         </ul>
         <div className='footer__socials'>
            <a href='https://github.com/DIMITRIDI' target='blank'><FaGithub /></a>
            <a href='https://orel.hh.ru/applicant/resumes/view?resume=36c058e2ff094c28cd0039ed1f486b4a48545a' target='blank'>hh</a>
            <a href='https://t.me/DIMITRIDIS' target='blank'><FaTelegram /></a>
         </div>
         <div className="footer__copyright">
            <small>&copy; DIMITRIDIS Production. All rights reserved.</small>
         </div>
      </footer>
   )
}

export default Footer;