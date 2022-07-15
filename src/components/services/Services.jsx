import React from 'react'
import "./services.css"
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
  {
    id: 1,
    image: Image1,
    title: "Методическая работа",
    description:
      "Формирование программы курсов, сбор скиллсетов, построение архитектуры, формирование кейсов и проектов по курсу, ревью курсов, обучение авторов",
  },
  {
    id: 2,
    image: Image2,
    title: "Web-разработка",
    description:
      "Рассматриваю предложения от 1500$, ищу крутую активную команду с интересным продуктом, не привязываюсь к технологиям, хочу глубже нырять во фронт и изучать новые языки",
  },
  {
    id: 3,
    image: Image3,
    title: "Менторство",
    description:
      "Веду занятия по направлениям «Python», «Web-разработка», «Алгоритмы», готовлю к вступительным экзаменам, ЕГЭ/ОГЭ, собеседованиям и лайвкодингу",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Услуги</h2>
      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className='services__img' />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
