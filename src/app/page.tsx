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
        <h1 className="text-center text-3xl font-mono font-bold text-gray-800 dark:text-gray-200">
          Página Inicial
        </h1>
        <hr />
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Este é o conteúdo da sua página principal.
        </p>
      </DashboardLayout>
    </main>
  );
}
