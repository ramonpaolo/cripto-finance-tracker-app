import axios from "axios";
import React, {
    useContext,
    createContext,
    useState,
    useEffect,
    ReactElement,
} from "react";
import { JsxElement } from "typescript";

//---- Interfaces
import ICrypto from "../interfaces/CryptoInterface";
import ICriptoProvider from "../interfaces/CryptoProviderInterface";

const DEFAULT_VALUES: ICriptoProvider = {
    cryptos: [
        {
            btcPrice: "",
            change: "",
            coinrankingUrl: "",
            color: "",
            iconUrl: "",
            listedAt: 0,
            lowVolume: true,
            marketCap: "",
            name: "",
            price: "",
            rank: 0,
            sparkline: [""],
            symbol: "",
            tier: 0,
            uuid: "",
            volume24h: "",
        },
    ],
    setCriptos: () => {
        return;
    },
};

export const CriptoContext = createContext<ICriptoProvider>(DEFAULT_VALUES);

export const CriptoProvider = ({
    children,
}: {
    children: ReactElement | JsxElement;
}): ReactElement => {
    const [cryptos, setCriptos] = useState<ICrypto[]>(DEFAULT_VALUES.cryptos);

    const getDatas = async () => {
        const response = await axios.get(
            "https://proxy-reverse-coin.herokuapp.com/https://api.coinranking.com/v2/coins"
        );
        const coins: ICrypto[] = await response.data.data.coins;
        setCriptos(coins);
    };

    useEffect(() => {
        setTimeout(async () => await getDatas());

        setInterval(async () => await getDatas(), 40000);
    }, []);

    return (
        <CriptoContext.Provider value={{ cryptos, setCriptos }}>
            {children}
        </CriptoContext.Provider>
    );
};

export const useCripto = () => useContext(CriptoContext);
