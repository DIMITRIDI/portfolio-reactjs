import React from 'react';

import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

import ME from '../../assets/me.png';

const Header = () => {
   return (
      <header className="header">
         <div className="container header__container">
            <h4>Hello I'm</h4>
            <h1>Dmitry Andreev</h1>
            <h4 className="text-light">Frontend Developer</h4>
            <CTA />
            <HeaderSocials />
            <div className="me">
               <img src={ME} alt="me"/>
            </div>
            <a href='#contact' className="scroll__down">Scroll Down</a>
         </div>
      </header>
   )
}

export default Header;