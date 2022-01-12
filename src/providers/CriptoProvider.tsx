import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

//---- Interfaces
import ICripto from "../interfaces/CriptoInterface";

export const CriptoContext = createContext({});

export const CriptoProvider = (props: any) => {
  const [criptos, setCriptos] = useState<ICripto[] | undefined>(undefined);

  const getDatas = async () => {
    let response = await axios.get(
      "https://proxy-reverse-coin.herokuapp.com/https://api.coinranking.com/v2/coins"
    );
    let coins: ICripto[] = await response.data.data.coins;
    setCriptos(coins);
  };

  useEffect(() => {
    setTimeout(async () => await getDatas(), 1);
    setInterval(async () => await getDatas(), 40000);
  }, []);

  return (
    <CriptoContext.Provider value={{ criptos, setCriptos }}>
      {props.children}
    </CriptoContext.Provider>
  );
};

export const useCripto = () => useContext(CriptoContext);
