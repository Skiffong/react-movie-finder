import React from "react";

export const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3 z-depth-2">
        <a href="default" className="brand-logo center">
          Choose your movie
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/Skiffong"
              target="_blank"
              rel="noreferrer"
            >
              Skiffong
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
