import React from "react";

//---- Interfaces
import ICripto from "../interfaces/CriptoInterface";

//---- Assets
import arrowGreen from "../assets/arrow-green.svg";
import arrowRed from "../assets/arrow-red.svg";

export default function Coin(props: any) {
  const cripto = props.cripto as ICripto;
  const priceDolar = props.dolar as number;

  return (
    <div className="coin">
      <picture>
        <img
          loading="lazy"
          className="logo"
          src={cripto.iconUrl}
          alt={cripto.symbol}
          width={40}
          height={40}
        />
      </picture>
      <h3>
        {cripto.name}({cripto.symbol})
      </h3>
      <h5 className="market-cap">
        {new Intl.NumberFormat("pt-BR", {
          currency: "USD",
          style: "currency",
        }).format(parseFloat(cripto.marketCap))}
      </h5>
      <span
        className="change-price"
        style={{
          color: parseFloat(cripto.change) >= 0 ? "green" : "red",
        }}
      >
        {parseFloat(cripto.change) >= 0.0 ? (
          <img
            src={arrowGreen}
            width={40}
            height={40}
            className="arrow-positive"
          />
        ) : (
          <img
            src={arrowRed}
            width={40}
            height={40}
            className="arrow-negative"
          />
        )}{" "}
        {parseFloat(cripto.change).toString().replace(".", ",")}
      </span>

      <div className="coin-column-price" title={`${cripto.change}`}>
        <h5>
          USD{"  "}
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD",
          }).format(parseInt(cripto.price))}
        </h5>
        <h5>
          BRL{"  "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(priceDolar * parseFloat(cripto.price))}
        </h5>
      </div>
      {/* <canvas width={40} height={40} id={`${cripto.uuid}`}></canvas> */}
    </div>
  );
}
