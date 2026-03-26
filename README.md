# DevFinder - GitHub Repository Explorer

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple.svg)](https://getbootstrap.com/)
[![Axios](https://img.shields.io/badge/Axios-1.6-green.svg)](https://axios-http.com/)

Uma aplicação web client-side que consome a API pública do GitHub, permitindo aos usuários explorar perfis e repositórios de desenvolvedores de forma intuitiva e responsiva.

## 🚀 Demo

[🔗 Visualizar Demo](https://seu-projeto.surge.sh) *Substitua pela URL do seu projeto hospedado*

## 📋 Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para consumo da API do GitHub e CDNs)

## 🛠️ Tecnologias Utilizadas

- **JavaScript ES6+** - Funcionalidades modernas da linguagem
- **Bootstrap 5** - Framework CSS (via CDN)
- **Axios** - Cliente HTTP para requisições à API (via CDN)
- **Bootstrap Icons** - Biblioteca de ícones (via CDN)
- **GitHub REST API v3** - API oficial do GitHub

## 📦 Estrutura do Projeto

devfinder/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos customizados
├── js/
│   ├── app.js             # Ponto de entrada da aplicação
│   ├── router.js          # Sistema de rotas
│   ├── api.js             # Camada de comunicação com API
│   ├── store.js           # Gerenciamento de estado
│   ├── components/        # Componentes reutilizáveis
│   │   ├── UserCard.js    # Card de perfil do usuário
│   │   ├── RepoList.js    # Listagem de repositórios
│   │   └── SortControl.js # Controle de ordenação
│   └── pages/             # Páginas da aplicação
│       ├── Home.js        # Página inicial
│       ├── Profile.js     # Perfil do usuário
│       └── RepoDetail.js  # Detalhes do repositório
└── README.md

## 🚀 Como Executar o Projeto Localmente

- 1. Clone o repositório
    **git clone https://github.com/seu-usuario/devfinder.git**
    **cd devfinder**
  