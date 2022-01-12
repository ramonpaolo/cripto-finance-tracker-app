import axios from "axios";
import React, { useEffect, useState } from "react";

//---- Styles
import "./App.css";

//---- Icons
import refresh from "./assets/refresh.svg";

//---- Components
import Coin from "./components/Coin";

//---- Interfaces
import ICripto from "./interfaces/CriptoInterface";

//---- Providers
import { useCripto } from "./providers/CriptoProvider";
import { Theme, useTheme } from "./providers/ThemeProvider";

function App() {
  const { criptos }: any = useCripto();
  const { theme, setTheme }: any = useTheme();

  const [priceDolar, setPriceDolar] = useState(0.0);

  useEffect(() => {
    setTimeout(async () => {
      let response = await axios.get(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL"
      );
      let priceDolar = parseFloat(await response.data["USDBRL"]["ask"]);
      setPriceDolar(priceDolar);
    }, 1);
  }, []);

  if (priceDolar === 0.0 || criptos === undefined)
    return (
      <div id="loading-div">
        <img className="loading" src={refresh} alt="refresh icon" />
      </div>
    );
  else
    return (
      <div className={`${theme}`}>
        <div className="nav">
          <h1>Finance Tracker</h1>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Dark" : "Light"} theme
          </button>
        </div>
        <br />

        {criptos !== undefined
          ? (criptos as ICripto[]).map((cripto) => {
              return (
                <Coin key={cripto.uuid} cripto={cripto} dolar={priceDolar} />
              );
            })
          : "..."}
      </div>
    );
}

export default App;
