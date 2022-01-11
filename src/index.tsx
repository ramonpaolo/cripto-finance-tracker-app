import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//---- Providers
import { CriptoProvider } from "./providers/CriptoProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <CriptoProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CriptoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
