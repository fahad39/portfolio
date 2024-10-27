import React from "react";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <box-icon name="award about__icon"></box-icon>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3+ Years Working</span>
      </div>
      <div className="about__box">
        <box-icon name="briefcase-alt about__icon"></box-icon>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20+ Projects</span>
      </div>
      <div className="about__box">
        <box-icon name="support about__icon"></box-icon>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info;
