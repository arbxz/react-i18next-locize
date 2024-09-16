import React from "react";
import i18next from "i18next";

const LanguageSelector = () => {
  const changeLanguage = (lng: string | undefined) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("sv")}>Swedish</button>
      <button onClick={() => changeLanguage("de")}>German</button>
    </div>
  );
};

export default LanguageSelector;
