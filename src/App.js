
import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Lejla-dev/Weather-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lejla Latic
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Lejla-dev/Weather-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://elastic-franklin-aa5196.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}