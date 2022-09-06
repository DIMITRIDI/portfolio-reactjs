import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import ME from '../assets/me-about.jpg';
import Certificate from '../assets/about.jpg';

const About = () => {
   return (
      <section id='about'>
         <h4>Get To Know</h4>
         <h2>About Me</h2>
         <div className="container about__container">
            <div className="about__me">
               <div className="about__me-image">
                  <img src={ME} alt="About me" />
               </div>
            </div>
            <div className="about__content">
               <div className="about__cards">
                  <article className="about__card">
                     <div className='about__certificate'>
                        <img src={Certificate} alt="certificate" />
                     </div>
                  </article>
                  <article className="about__card">
                     <FaAward className="about__icon"/>
                     <h4>Experience</h4>
                     <small>2+ Years Working</small>
                  </article>
                  <article className="about__card">
                     <FiUsers className="about__icon"/>
                     <h4>Clients</h4>
                     <small>20+ Worldwide</small>
                  </article>
                  <article className="about__card">
                     <VscFolderLibrary className="about__icon"/>
                     <h4>Projects</h4>
                     <small>10+ Completed</small>
                  </article>
               </div>
               <p>БЫСТРО ОБУЧАЮСЬ. Я специалист в области frontend разработки. В 2020 году изучил html, css, работал в scss, bootstrap, разобрался с git и gulp. 2021 год посвятил изучению javascript прошел курсы по react. Владею графическими редакторами, делаю кроссбраузерную верстку и адаптив.</p>
               <p>OТВЕТСТВЕННЫЙ. Всегда ответственно подхожу к любому вопросу и разным мелочам ,готов обсудить любые нюансы, связанные с версткой. Со мной всегда можно договориться по выполнению работы и срокам, а также по цене.</p>
               <p>ВСЕГДА НА СВЯЗИ. Мне можно писать в любое время, на почту или в соц сетях. Читаю документацию на английском языке. C удовольствием работаю в команде.</p>
               <a href='#contact' className="btn btn-primary">Let's Talk</a>
            </div>
         </div>
      </section>
   )
}

export default About;