import React from "react";
import "./about.css";
import Me from "../../assets/avatar-1.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Обо мне</h2>
      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Живу в Нижнем Новгороде, всесторонне разбираюсь во фронтенде,
              люблю React и Tailwind, хорошо общаюсь с людьми, быстро учусь и
              адаптируюсь к новым технологиям.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1kJG8SnKpQYNQGAs469LEEpzHY3niN9B6"
              className="btn"
            >
              Скачать CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="sklls__name">React</h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="sklls__name">PHP</h3>
                <span className="skills__number ">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage php"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="sklls__name">Vue</h3>
                <span className="skills__number ">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage vue"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
