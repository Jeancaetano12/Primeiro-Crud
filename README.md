# Primeiro CRUD com Next.js, Tailwind e Supabase



## 📜 Sobre o Projeto

Este é um projeto Full-stack desenvolvido como parte do curso de Análise e Desenvolvimento de Sistemas. A aplicação implementa um **CRUD (Create, Read, Update, Delete)** completo para gerenciar uma lista de clientes, utilizando tecnologias modernas do ecossistema JavaScript/TypeScript.

O projeto foi construído do zero, passando por um intenso processo de depuração e refatoração para garantir uma base de código estável, segura e alinhada com as melhores práticas de desenvolvimento web atuais.

**🔗 Deploy do Projeto:** [[Link para a Vercel](https://primeiro-crud-testes.vercel.app)]

## ✨ Funcionalidades Implementadas
* ✅ **Utilizando APIs `REST`:** Todas APIs padronizadas com modelo **REST**.
* ✅ **Listagem de Clientes (`Read`):** Visualização em tempo real de todos os clientes cadastrados no banco de dados.
* ✅ **Criação de Clientes (`Create`):** Formulário dedicado para adicionar novos clientes.
* ✅ **Atualização de Clientes (`Update`):** Edição dos dados de um cliente existente através de uma janela **modal**, proporcionando uma experiência de usuário fluida sem a necessidade de navegar para outra página.
* ✅ **Deleção de Clientes (`Delete`):** Remoção de clientes do banco de dados com um diálogo de confirmação para previnir ações acidentais.
* ✅ **Autenticação de Usuários:** Utilizando biblioteca `ORM Prisma` para consultar e proteger o banco de dados PostgreSQL da Supabase.
* ✅ **Open API Swagger:** Utilizando padronização `Swagger` para documentar APIs.
* ✅ **Notificações Toast:** Feedback visual instantâneo para o usuário após cada operação (criação, atualização, deleção), utilizando a biblioteca `react-hot-toast`.
* ✅ **Layout Responsivo:** Interface construída com `Tailwind CSS`, adaptável a diferentes tamanhos de tela.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias na sua base:

* **Framework:** [Next.js](https://nextjs.org/) (v14)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (v3)
* **Backend e Banco de Dados:** [Supabase](https://supabase.io/) (PostgreSQL)
* **ORM Prisma:** [Prisma](https://www.prisma.io) (v6)
* **OpenAPI Swagger:** [Swagger](https://swagger.io) (v6)
* **Notificações:** `react-hot-toast`
* **Deploy:** [Vercel](https://vercel.com/)

## 🛠️ Como Rodar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo.

### 📝 Pré-requisitos
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* Uma conta gratuita no [Supabase](https://supabase.com/)

### 🪛 Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Jeancaetano12/Primeiro-Crud.git](https://github.com/Jeancaetano12/Primeiro-Crud.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Primeiro-Crud
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

### ⚙️ Configuração do Supabase

1.  Crie um novo projeto no seu painel do Supabase.
2.  Vá para a seção **SQL Editor** e crie a tabela de `clientes` usando o script abaixo.
3.  Vá para **Project Settings > API** no seu painel do Supabase para obter suas chaves de API.

#### 🔒 Variáveis de Ambiente

Crie um arquivo chamado `.env.local` na raiz do seu projeto e adicione suas chaves do Supabase, como no exemplo abaixo:

```env
NEXT_PUBLIC_SUPABASE_URL=URL_DO_SEU_PROJETO_SUPABASE
NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_PUBLICA_SUPABASE
```

### 📜 Script SQL para a Tabela

Use este script no SQL Editor do Supabase para criar a tabela `clientes:`

```
CREATE TABLE public.clientes (
    id UUID DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    nome VARCHAR,
    email VARCHAR,
    telefone VARCHAR,
    cpf VARCHAR,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);
```
*Observação: A coluna* `user_id` *está pronta para ser usada com as Políticas de Segurança (RLS), caso você decida reativá-las no futuro.*

### 🎯 Executando a aplicação

Com tudo configurado, inicie o servidor de desenvolvimento:
``` npm run dev ```
Abra http://localhost:3000 no seu navegador para ver o resultado.

# 🧑‍💻 Autor
Jean Caetano - [GitHub](https://github.com/Jeancaetano12?tab=repositories)

*Projeto proposto por: (https://github.com/FranciscoWallison/desafio-back-end)*

*Este projeto representa uma `jornada de aprendizado prático em desenvolvimento back-end`, aplicando conceitos de front-end, back-end, banco de dados e autenticação.*
