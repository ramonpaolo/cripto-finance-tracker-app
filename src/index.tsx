import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CriptoProvider } from "./providers/CriptoProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import reportWebVitals from "./reportWebVitals";

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
