# Cripto Finance Tracker

### Link Site: 
https://pedantic-sinoussi-8b86be.netlify.app/ [![Netlify Status](https://api.netlify.com/api/v1/badges/992ca56a-42dc-4922-a659-717236f25888/deploy-status)](https://app.netlify.com/sites/pedantic-sinoussi-8b86be/deploys)

---

## 📑 Sobre o projeto

É uma aplicação web Front-End(React), para mostrar as 50 maiores cryptocoins de valor no mercado

## Como Funciona ?

A aplicação consiste em poder visualizar o preço atual em USD e BRL, marketcap(Valor de mercado), variação do preço em 24h, logo, nome e simbolo da crypto.

É utilizado a lib axios para fazer a requisição da [API](https://coinranking.com/) das 50 criptocoins, e da [API](https://docs.awesomeapi.com.br/api-de-moedas) de câmbio do dólar, e utilizado o gerenciador de estados nativo do React(ContextAPI) para fazer a atualização dos dados da cripto, a cada 40 segundos.

O site também possui modo dark e modo light, podendo ser trocado a qualquer instante de temas.

Ops: Foi criado um pequeno Proxy Reverse em nodejs com express, para a utilização da API da coinranking

<!-- ## Detalhe:

O site até o momento atual, funciona apenas habilitando o CORS no navegador(via plugin) por limitação da API gratuita.

Para quem desejar que o site funcione sem essa limitação, basta utilizar um proxy, ou criar um pequeno servidor, acessar a API pelo servidor(back-end) e fazer a sua requisição para o seu próprio servidor(back-end) retornar os dados.

Para mais informaçãos, acesse: [Medium](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9) -->

---

# 🚀 Tecnologias Utilizadas
- ReactJs
- TypeScript
- ContextAPI
- Axios

---

# 📁 Como executar o projeto?
Pré-requesitos: NodeJs 14.17 LTS e Yarn

```bash
# clonar repositório
$ git clone https://github.com/ramonpaolo/cripto-finance-tracker-app

# entrar na pasta do projeto
$ cd cripto-finance-tracker-app/

# instalar as depêndencias:
$ yarn install

# iniciar o projeto:
$ yarn start
```

![GitHub top language](https://img.shields.io/github/languages/top/ramonpaolo/cripto-finance-tracker-app)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ramonpaolo/cripto-finance-tracker-app)
![GitHub](https://img.shields.io/github/license/ramonpaolo/cripto-finance-tracker-app)
