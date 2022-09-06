import React from 'react';

import IMG1 from '../assets/portfolio1.jpg';
import IMG2 from '../assets/portfolio2.jpg';
import IMG3 from '../assets/portfolio3.jpg';
import IMG4 from '../assets/portfolio4.jpg';
import IMG5 from '../assets/portfolio5.jpg';
import IMG6 from '../assets/portfolio6.jpg';

const data = [
   {
      id: 1,
      image: IMG1,
      title: "Приложение разрабатывается сейчас",
      github: "https://github.com/DIMITRIDI/CoffeeShop-React",
      demo: "https://remarkable-blini-6205ea.netlify.app",
      text: "Приложение разрабатывается в настоящее время. Этапы разработки можно посмотреть на GitHub."
   },
   {
      id: 2,
      image: IMG2,
      title: "Everything You Love About Coffee",
      github: "https://github.com/DIMITRIDI/CoffeeShop-React",
      demo: "https://remarkable-blini-6205ea.netlify.app",
      text: "Многостраничное приложение для покупки кофе созданное с помощью ReactJS. В приложении помимо основной страницы имеются страницы для товаров добавленных в корзину и выбранных как понравившихся. Имеется фильтрация товаров по нескольким критериям. В приложении применяется: 1. Файловая структура и хуки React. 2. Маршрутизация с использованием React Router v6. 3. Управление состоянием через Redux."
   },
   {
      id: 3,
      image: IMG3,
      title: "Fitness Club",
      github: "https://github.com/DIMITRIDI/fitness-exercises",
      demo: "https://rococo-ganache-528d72.netlify.app",
      text: "Приложение для фитнес-упражнений созданное с помощью ReactJS и API. Благодаря возможности выбирать категории упражнений на определенные группы мышц, имеется возможность просматривать более тысячи упражнений с практическими примерами, разбивкой на страницы, подробными сведениями об упражнениях, извлекать связанные видео с YouTube, отображать похожие упражнения и не только. В приложении применяется: 1. Файловая структура и хуки React. 2. Material-UI — библиотека с открытым кодом, которая включает в себя компоненты React, реализующие Material Design от Google. 3. RapidAPI ExerciseDB для получения данных из неограниченных источников."
   },
   {
      id: 4,
      image: IMG4,
      title: "Marvel information portal",
      github: "https://github.com/DIMITRIDI/marvelApi",
      demo: "https://remarkable-blini-6205ea.netlify.app",
      text: "Приложение разработано при прохождении курса 'Полный курс по JavaScript + React - с нуля до результата' на обучающей платформе Udemy. Приложение созданно с помощью ReactJS и API. С помощью приложения имеется возможность находить любимых персонажей, а также комиксов, в которых задействованы определенные персонажи. В приложении применяется: 1. Файловая структура и хуки React. 2. MarvelAPI для получения данных о персонажах в неограниченных количествах."
   },
   {
      id: 5,
      image: IMG5,
      title: "Rental Homes for Everyone",
      github: "https://github.com/DIMITRIDI/realestate",
      demo: "https://realestate-black.vercel.app",
      text: "Приложение для поиска аренды жилья созданное с помощью ReactJS и API по обучающему видеоуроку на YouTube. Значительно облегчает поиск жилья фильтрация по множеству параметров, приложение разделено на страницы для покупки и аренды жилья. В приложении применяется: 1. Файловая структура и хуки React. 2. Material-UI — библиотека с открытым кодом, которая включает в себя компоненты React, реализующие Material Design от Google. 3. RapidAPI Bayut для получения данных из неограниченных источников."
   },
   {
      id: 6,
      image: IMG6,
      title: "Travel Advisor",
      github: "https://github.com/DIMITRIDI/travel-pleasure",
      demo: "https://leafy-sawine-9da1f7.netlify.app",
      text: "Приложение для поиска лучшего отдыха созданное с помощью ReactJS и API по обучающему видеоуроку на YouTube. При выборе места отдыха на карте проводится фильтрация для выбора лучших ресторанов, гостиниц или туристических достопримечательностей. В приложении применяется: 1. Файловая структура и хуки React. 2. Material-UI — библиотека с открытым кодом, которая включает в себя компоненты React, реализующие Material Design от Google. 3. RapidAPI Travel Advisor для получения данных из неограниченных источников."
   }
];

const Portfolio = () => {
   return (
      <section id='portfolio'>
         <h4>My Recent Work</h4>
         <h2>Portfolio</h2>
         <div className="container portfolio__container">
            {
               data.map(({id, image, title, github, demo, text}) => {
                  return (
                     <article key={id} className='portfolio__item'>
                        <div className="portfolio__item-box">
                           <div className="portfolio__item-image">
                              <img src={image} alt={title} />
                           </div>
                           <div className="portfolio__item-text">{text}</div>
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                           <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                           <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                        </div>
                     </article>
                  )
               })
            }
         </div>
      </section>
   )
}

export default Portfolio;