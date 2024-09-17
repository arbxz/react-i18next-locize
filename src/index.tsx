import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import { I18nextProvider } from "react-i18next"; // Importing I18nextProvider to provide i18n context to the app
import "./i18n"; // Importing the i18n configuration file

const container = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    {/* 
      Using I18nextProvider to wrap the App component.
      This makes the i18n instance available to all components within the App.
      Uncomment the lines below to use the provider.
    */}
    {/* <I18nextProvider i18n={i18n}> */}
    <App />
    {/* </I18nextProvider> */}
  </React.StrictMode>
);

/*
  Explanation:
  - The `I18nextProvider` component is imported from `react-i18next` and is used to provide the i18n instance to the entire React component tree.
  - The `i18n` configuration is imported from the `./i18n` file, which typically sets up the i18n instance with language resources and configurations.
  - By wrapping the `App` component with `I18nextProvider`, all child components can access the i18n instance via React's context API.
  - If `I18nextProvider` is not used, components can still use the i18n instance directly if it is imported and configured globally, but they won't benefit from the context-based dynamic updates (e.g., language switching).
    Directly using i18n: Simpler, less flexible, suitable for smaller apps.
    Using I18nextProvider: More flexible, leverages React context, suitable for larger apps or dynamic i18n configurations.
  */
