import axios from "axios";
import React, { useEffect, useState } from "react";

//---- Styles
import "./App.css";
//---- Assets
import refresh from "./assets/refresh.svg";
//---- Components
import Coin from "./components/Coin";
//---- Providers
import { useCripto } from "./providers/CriptoProvider";
import { useTheme } from "./providers/ThemeProvider";

function App() {
    const { cryptos } = useCripto();
    const { theme, setTheme } = useTheme();

    const [priceDolar, setPriceDolar] = useState(0.0);

    useEffect(() => {
        setTimeout(async () => {
            const response = await axios.get(
                "https://economia.awesomeapi.com.br/json/last/USD-BRL"
            );
            const priceDolar = parseFloat(await response.data["USDBRL"]["ask"]);
            setPriceDolar(priceDolar);
        });
    }, []);

    if (priceDolar === 0.0 || cryptos === undefined)
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
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                    >
                        {theme === "dark" ? "Dark" : "Light"} theme
                    </button>
                </div>
                <br />

                {cryptos !== undefined
                    ? cryptos.map((crypto) => {
                          return (
                              <Coin
                                  key={crypto.uuid}
                                  cripto={crypto}
                                  priceDolar={priceDolar}
                              />
                          );
                      })
                    : ""}
            </div>
        );
}

export default App;
