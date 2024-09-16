import React from "react";
import "./i18n";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LanguageSelector />
        <p>{t("common:welcome")}</p>
        <p>{t("common:welcomeUser", { name: "arbaaz" })}</p>
        <p>Links to Locize and nexus below :</p>
        <a
          className="App-link"
          href="https://locize.com"
          target="_blank"
          rel="noopener noreferrer">
          Locize
        </a>
        <a
          className="App-link"
          href="https://i18nexus.com/tutorials/react/react-i18next"
          target="_blank"
          rel="noopener noreferrer">
          React-i18n nexus
        </a>
      </header>
    </div>
  );
}

export default App;
