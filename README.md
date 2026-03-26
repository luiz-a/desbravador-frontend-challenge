# 🚀 DevFinder - GitHub Repository Explorer

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple.svg)](https://getbootstrap.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange.svg)](https://firebase.google.com/)

Uma aplicação web client-side (SPA) que consome a API pública do GitHub, permitindo aos usuários explorar perfis e repositórios de forma intuitiva, rápida e responsiva.

## 🔗 Demo
**Acesse agora:** [https://devfinder-github-id.web.app](https://devfinder-github-id.web.app)

---

## 🛠️ Tecnologias e Arquitetura

O projeto foi construído utilizando o conceito de **Single Page Application (SPA)** com JavaScript Vanilla, sem a necessidade de frameworks pesados, focando em performance e manutenibilidade.

- **Gerenciamento de Estado:** Pattern Custom Store para filtragem e ordenação instantânea.
- **Roteamento:** Sistema de rotas dinâmico via `Hash` (`#/user/:id`).
- **Interface:** Bootstrap 5 com componentes customizados e responsivos.
- **Requisições:** Axios para comunicação assíncrona com a GitHub REST API v3.

---

## 📦 Estrutura do Projeto

devfinder/ <br>
├── index.html<br>
├── js/<br>
│   ├── app.js<br>
│   ├── router.js<br>
│   ├── store.js<br>
│   ├── api.js<br>
│   ├── components/<br>
│   └── pages/<br>
├── firebase.json<br>
└── .gitignore<br>

## 🚀 Como Executar Localmente

## Clone o repositório

        git clone [https://github.com/seu-usuario/devfinder.git](https://github.com/seu-usuario/devfinder.git)

        cd devfinder

<br>

##  Instale as dependências (Axios/Bootstrap)

- npm install 

<br>

# Rodar o Projeto

### Usando o localmente
 - npx serve .