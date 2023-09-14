import React, { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifiction</h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelors of Computer Science
                </h3>
                <span className="qualification__subtitle">
                  Comstas University - Pakistan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2017 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Pakistan - Coursera
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>07/2017 - 10/2017
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Design Fundamentals</h3>
                <span className="qualification__subtitle">
                  Pakistan - Coursera
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>06/2020 - 07/2020
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Mobile App Development</h3>
                <span className="qualification__subtitle">
                  Pakistan - Coursera
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>08/2020 - 10/2020
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">The Hexaa</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Powersoft 19</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
