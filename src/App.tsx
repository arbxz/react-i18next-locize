import React from "react";
import "./i18n";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";
import ButtonCounter from "components/ButtonCounter";
import TransComponentExample from "components/TransComponentExample";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <LanguageSelector />

        <p>{t("common:welcome")}</p>
        <code>Interpolation example :</code>
        <p>{t("common:welcomeUser", { name: "arbaaz" })}</p>
        <ButtonCounter />
      </header>
    </div>
  );
};

export default App;
