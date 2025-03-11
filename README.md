# 🚀 Projeto Sauce Demo com Cypress

Este projeto contém testes automatizados para o site **SauceDemo** utilizando o **Cypress**. Foram implementados testes funcionais para login, ordenação de produtos e checkout.

## Requisitos
Antes de executar os testes, certifique-se de ter os seguintes requisitos instalados:
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)

---

## Instalação

Clone o repositório e instale as dependências:

```sh
# Clone o repositório
git clone https://github.com/seu-usuario/saucedemo-cypress-tests.git

# Acesse o diretório do projeto
cd saucedemo-cypress-tests

# Instale as dependências
npm install

# Instale o Cypress
npm install cypress --save-dev
```

---

## Execução dos Testes
Para rodar os testes, utilize o comando:
```sh
npm run test     # Executa os testes em modo headless (sem interface gráfica)  
npm run cy:open  # Executa os testes no modo interativo (GUI Mode)
```

---

## Estrutura do projeto

```
  /cypress
  ├── e2e/authentication
  │   ├── login.cy.js   # Testes de Login  
  ├── e2e/shopping
  │   ├── checkout.cy.js    # Testes do Carrinho e Checkout
  │   ├── checkoutWithErrors.cy.js  # Testes dos parâmetros na página de Checkout
  │   ├── sorting.cy.js     # Testes de Ordenação
  │
  ├── fixtures
  │   ├── loginData.json    # Dados de Login
  │   ├── paymentData.json  # Dados de Pagamento
  │
  ├── support
  │   ├── commands          # Comandos customizados do Cypress
  │   │   ├── checkout.js         # Comandos relacionados ao Checkout
  │   │   ├── checkoutWithErrors.js  # Comandos para testes de erro no Checkout
  │   │   ├── sorting.js           # Comandos para testes de Ordenação
  │   │
  │   ├── data              # Dados utilizados em diferentes partes dos testes
  │   │   ├── login.js           # Dados e funções auxiliares para Login
  │   │
  │   ├── e2e.js            # Configuração global dos testes E2E

```
---

## Tecnologias Utilizadas
- Cypress → Ferramenta de automação de testes para aplicações web
- Node.js → Ambiente de execução para JavaScript
- npm → Gerenciador de pacotes do Node.js

---
🤝🏻 Feito por [Gabriel Silva](https://www.linkedin.com/in/gabrielsilva9810/)