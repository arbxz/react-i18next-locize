import React from "react";
import { useTranslation } from "react-i18next";

const ButtonCounter = () => {
  const { t } = useTranslation();
  const [clickCount, setClickCount] = React.useState(0);
  return (
    <div>
      <h4>
        <code>Translation function : Plurals</code>
      </h4>
      <button onClick={() => setClickCount(clickCount + 1)}>
        Click on me !
      </button>
      <button onClick={() => setClickCount(0)}>Reset Counter</button>
      <p>{t("common:clickAmount", { count: clickCount })}</p>
    </div>
  );
};

export default ButtonCounter;
