import React from "react";

export const Footer = () => {
  return (
    <footer className="page-footer   deep-purple darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} movies petproject
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Skiffong"
            target="_blank"
            rel="noreferrer"
          >
            Skiffong
          </a>
        </div>
      </div>
    </footer>
  );
};
