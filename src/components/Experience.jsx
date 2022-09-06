import React from 'react';
import { IoLogoHtml5 } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { BsBootstrapFill } from 'react-icons/bs';
import { SiJquery } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { FaGit } from 'react-icons/fa';

const Experience = () => {
   return (
      <section id='experience'>
         <h4>What Skills I Have</h4>
         <h2>My Experience</h2>
         <div className="container experience__container">
            <article className="experience__details">
               <IoLogoHtml5 className="experience__details-icon"/>
               <div>
                  <h4 className="experience__details-title">HTML</h4>
                  <small className="text-light">Experienced</small>
               </div>
            </article>
            <article className="experience__details">
               <IoLogoCss3 className="experience__details-icon"/>
               <div>
                  <h4 className="experience__details-title">CSS</h4>
                  <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience__details">
               <IoLogoJavascript className="experience__details-icon"/>
               <div>
                  <h4 className="experience__details-title">JavaScript</h4>
                  <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience__details">
               <BsBootstrapFill className="experience__details-icon"/>
               <div>
                  <h4 className="experience__details-title">Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience__details">
               <SiJquery className="experience__details-icon"/>
               <div>
                  <h4 className="experience__details-title">JQuery</h4>
                  <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience__details">
               <FaReact className="experience__details-icon"/>
               <div>
                  <h4 className="experience__details-title">React</h4>
                  <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience__details">
               <SiRedux className="experience__details-icon"/>
               <div>
                  <h4 className="experience__details-title">Redux</h4>
                  <small className="text-light">Intermediate</small>
               </div>
            </article>
            <article className="experience__details">
               <FaGit className="experience__details-icon"/>
               <div>
                  <h4 className="experience__details-title">Git</h4>
                  <small className="text-light">Intermediate</small>
               </div>
            </article>
         </div>
      </section>
   )
}

export default Experience;