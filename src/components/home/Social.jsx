import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/fahad-hussain-830691164/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://dribble.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-dribbble"></i>
      </a>
      <a
        href="https://github.com/fahad39"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
