import React from "react";
import "./footer.css";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Fahad</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li> */}
        </ul>
        <div className="footer__social">
          <a
            href="https://en-gb.facebook.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; FahadHussain. ALL rights reserved {year}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
