# Lemon - Teste Frontend - Button

## 📋 Requisitos

### O projeto consiste em criar um botão como componente de uma biblioteca.

### O botão possui diferenças visuais por estado e pela configuração de suas props.

### **props:**

✔️ `color` _(string) -_ altera o esquema de cores do botão. A cor aplicada em um botão depende do esquema de cores, dos estados e de outras props aplicadas.
**Valores possíveis:** `primary`, `secondary`
**Default:** `primary`

✔️ `icon` _(string?) -_ recebe o nome do ícone que deve ser apresentado no botão, em formato SVG. Não existe botão que tenha apenas um ícone como conteúdo. **Não é obrigatória.**
**Valores possíveis:** `arrow-right`, `check`, `refresh`

✔️ `onClick` _(function?)_ - função a ser executada no evento de _click_. **Não é obrigatória.**

✔️ `disabled` _(boolean)_: aciona estado `:disabled` quando `true`, no qual ações de _click_ devem estar desabilitadas.
**Default:** `false`

✔️ `children` _(`React.ReactNode`?)_: **conteúdo do botão. **Não é obrigatória.\*\*

## 🛠 Tecnologias

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="20" height="16" /> ReactJS

<img src="https://www.typescriptlang.org/favicon-32x32.png" width="20" height="16" /> TypeScript

<img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="16" height="16" /> Styled-components

<img src="https://testing-library.com/img/octopus-64x64.png" width="20" height="16" /> React Testing Library

## ▶️ Inicializando o projeto

- ### **Pré-requisitos**

  - **Node.js**
  - Gerenciador de pacotes **npm**

```sh
  # Abra pasta do projeto
  $ cd lemonLibrary
  # Instale as dependencias
  $ npm install
  # Rode a aplicação
  $ npm start
```

### Abra o navegador

[http://localhost:3000](http://localhost:3000) para ver no browser.

## ▶️ Rodando os tests

```sh
  # Abra pasta do projeto
  $ cd lemonLibrary
  # Rode os testes
  $ npm test
```
