import React from "react";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t } = useTranslation();

  return <div>{t("card:title")}</div>;
};

export default Card;
