# ☕ Coffee Delivery

- Uma aplicação completa de e-commerce para venda e entrega de cafés, desenvolvida com React, TypeScript, React Hook Form, Zod e muito mais.

# 🎞️ Vídeo da aplicação

https://github.com/user-attachments/assets/5a1e995a-1c66-4c0e-9e33-12ebdf110c96


## 🚀 Tecnologias Utilizadas

### ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- Construção da interface com componentes reutilizáveis.

### ![TypeScript](https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white)
- Tipagem estática e segurança no desenvolvimento.
- Definição de tipos como `Coffee`, `Item`, `OrderContextType`, `DeliveryFormData`.

###  ![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
- Este projeto utiliza Styled Components para aplicar estilos de forma elegante e escalável, diretamente nos componentes React. Essa abordagem permite:

- Criação de estilos com escopo local aos componentes.
- Uso de props dinâmicas para alterar o estilo com base no estado.
- Definição de temas globais reutilizáveis, como em styles/themes/default.ts.
- Organização clara com arquivos styles.ts ao lado de cada index.tsx de componente ou página.

### ![React Hook Form](https://img.shields.io/badge/React--Hook--Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
- Gerenciamento de formulários.
- Aplicado no formulário de delivery.

### ![Zod](https://img.shields.io/badge/Zod-8c52ff?style=for-the-badge)
- Validação de dados do formulário com schemas.
- Valida campos com os dados para entrega e pagamento do pedido.

### ![Context API](https://img.shields.io/badge/Context%20API-61dafb?style=for-the-badge&logo=react&logoColor=white)
- Gerenciamento global de estado para pedidos.
- Compartilhamento de dados como itens e suas quantidade no carrinho, dados de entrega e formas de pagamento.

### ![Phosphor Icons](https://img.shields.io/badge/Phosphor%20Icons-000000?style=for-the-badge)
- Ícones elegantes para botões e feedback visual.
---

## 📂 Estrutura de Pastas

```bash
src
├── assets/
├── components/
├── context/
│   └── OrderContextProvider.tsx
├── layouts/
│   └── DefaultLayout.tsx
├── pages/
│   ├── Home/
│   ├── Cart/
│   └── OrderSuccess/
├── reducer/
│   └── Order/
│       ├── actions.ts
│       └── reducer.ts
├── router/
│   └── index.tsx
└── styles/


```

## ✅ Funcionalidades

- Listagem de cafés com tipos, descrição e preço
- Carrinho com quantidade dinâmica
- Feedback visual ao adicionar itens
- Formulário de entrega validado com Zod
- Escolha de método de pagamento (cartão, débito ou dinheiro)
- Tela de pedido confirmado
- Limpeza automática do carrinho após pedido

## 📌 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/MatheusJSGama/Coffee-Delivery.git
```

2. Instale as dependências:
```bash
npm install
```
2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

📝 Licença
[MIT](https://choosealicense.com/licenses/mit/)
