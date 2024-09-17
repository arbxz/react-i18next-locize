import React from "react";
import { Trans, useTranslation } from "react-i18next";

interface TransComponentExampleProps {
  messages: string[];
}

const TransComponentExample = ({ messages }: TransComponentExampleProps) => {
  const { t } = useTranslation();
  const count = messages.length;
  const person = { name: "Henry", age: 21 };
  const { name } = person;

  return (
    <Trans
      ns="transComponent"
      i18nKey="userMessagesUnread"
      name={name}
      count={count}
      components={{ 1: <strong /> }}></Trans>
  );
};

export default TransComponentExample;
