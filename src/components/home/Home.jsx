import React from 'react'
import "./home.css"
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="" className='home__img' />
        <h1 className="home__name">Максим Латников</h1>
        <span className="home__education">Фронтенд-разработчик, Методист, WebDevTutor</span>

        <HeaderSocials/>

        <a href="https://t.me/latnikov" rel="noreferrer" target="_blank" className='btn'>Нанять меня</a>

        <ScrollDown />
      </div>
      <Shapes/>
    </section>
  )
}

export default Home
