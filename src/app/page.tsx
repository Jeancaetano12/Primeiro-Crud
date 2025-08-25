/**
 * Nome do arquivo: Page.tsx
 * Data de criação: 09/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de interação do usuário com a interface gráfica do módulo de vendas.
 * Aqui são tratados eventos de cliques, validações de entrada e comunicação
 * com APIs para envio e recebimento de dados.
 *
 * Este script é parte o curso de ADS.
 */
import DashboardLayout from "./components/DashboardLayout";

export default function Home() {
  return (
    // Conteúdo com o componente de Layout
    <main>
      {/* Aqui vamos construir nosso dashboard */}
      <DashboardLayout>
        <h1 className="text-3xl mb-6 font-mono font-bold text-gray-800 dark:text-gray-200">
          Página Inicial
        </h1>
        <hr />
        <div className="font-mono grid grid-cols-2 gap-4 mt-2 text-white dark:text-white">
          <div className="bg-white dark:bg-gray-800 p-4 mt-2 rounded">
            <h2 className="text-xl text-center font-bold mb-2">📚 Sobre o Projeto</h2>
            Este é um projeto de back-end desenvolvido como parte do curso de Análise e Desenvolvimento de Sistemas.
            A aplicação implementa um CRUD (Create, Read, Update, Delete) completo para gerenciar uma lista de
            clientes, utilizando tecnologias modernas do ecossistema JavaScript/TypeScript.
            <hr className="mt-2 mb-2 border-t-4 border-blue-600 dark:border-blue-400 rounded" />
            O projeto foi construído do zero, passando por um intenso processo de depuração e refatoração para
            garantir uma base de código estável, segura e alinhada com as melhores práticas de desenvolvimento web
            atuais.
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 mt-2 rounded border border-red-700 dark:border-red-500">
            <h2 className="text-xl text-center font-bold mb-2">Atenção ⚠️</h2>
            <p className="mb-2 text-center">Esta aplicação é uma demonstração. <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">
              Não insira dados sensíveis em nenhum momento</span>.</p>
              <p className="mb-2 text-center">Essa aplicação não possui verificação de dados, é puramente uma prova de conceito e os dados aqui registrados não são utilizados para <span className="underline underline-offset-3 decoration-2 decoration-red-600 dark:decoration-red-600 text-shadow-lg/55">nada</span>.</p>
          </div>
        </div>
        {/* Divisoria bonintinha */}
        <div className="flex items-center mt-2 mb-2">
          <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
          <span className="mx-4 text-gray-400 dark:text-gray-500">★</span>
          <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
        </div>
        {/*
        <div className="font-mono gap-4 mt-2 text-white dark:text-white">
          <div className="bg-white dark:bg-gray-800 p-4 mt-2 rounded">

          </div>
        </div>*/}
      </DashboardLayout>
    </main>
  );
}
