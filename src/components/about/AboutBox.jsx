import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">4000+</h3>
          <span className="about__subtitle">провёл занятий</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-pencil"></i>
        <div>
          <h3 className="about__title">5</h3>
          <span className="about__subtitle">курсов написал</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">120+</h3>
          <span className="about__subtitle">студентов обучил</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-graph"></i>
        <div>
          <h3 className="about__title">4 года</h3>
          <span className="about__subtitle">стаж работы</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
