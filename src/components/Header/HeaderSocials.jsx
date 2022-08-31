import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const HeaderSocials = () => {
   return (
      <div className='header__socials'>
         <a href='https://github.com/DIMITRIDI' target='blank'><FaGithub /></a>
         <a href='https://orel.hh.ru/applicant/resumes/view?resume=36c058e2ff094c28cd0039ed1f486b4a48545a' target='blank'>hh</a>
         <a href='https://t.me/DIMITRIDIS' target='blank'><FaTelegram /></a>
      </div>
   )
}

export default HeaderSocials;