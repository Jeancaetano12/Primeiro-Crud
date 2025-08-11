/**
 * Nome do arquivo: Page.tsx
 * Data de criação: 11/08/2025
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
import React from 'react'; // Import React para usar o tipo React.ReactNode
import Link from 'next/link';

// Este tipo define que nosso componente pode receber outros componentes React como "filhos"
type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    // Container principal que usa flexbox para alinhar a sidebar e o conteúdo
    <div className="flex h-screen bg-neutral-900 dark:bg-gray-950">
      
      {/* Sidebar (Barra Lateral) */}
      <aside className="w-64 bg-white dark:bg-neutral-900 text-gray-200 dark:text-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-mono font-bold">Meu CRUD</h1>
        </div>
        <nav>
          <ul>
            {/* Estes são seus links de navegação. Vamos usar 'a' por enquanto */}
            <li className="mb-2 font-mono">
              <Link href="/" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                Início
              </Link>
            </li>
            <li className="mb-2 font-mono">
              <Link href="/clientes/novo" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                Cadastrar Clientes
              </Link>
            </li>
            <li className="mb-2 font-mono">
              <Link href="/clientes" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                Gerenciar Clientes
              </Link>
            </li>
            <li className="mb-2 font-mono">
              <a href="#" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                Configurações
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* A mágica acontece aqui! O conteúdo da sua página será renderizado aqui dentro */}
        {children}
      </main>

    </div>
  );
}