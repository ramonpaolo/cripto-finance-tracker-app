// ---- Interfaces
import ICrypto from "./CryptoInterface";

export default interface ICriptoProvider {
    cryptos: ICrypto[];
    setCriptos: React.Dispatch<React.SetStateAction<ICrypto[]>>;
}
