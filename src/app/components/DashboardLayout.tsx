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
// src/components/DashboardLayout.tsx
'use client'; // 1. Transformamos em um Componente de Cliente

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  // Estado para controlar a visibilidade da sidebar no mobile
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  

  return (
    <div className="flex h-screen bg-neutral-900 dark:bg-gray-950">
      {/* Menu Hamburguer mobile */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="md:hidden p-2 text-white absolute mt-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      </button>
      {/* Backdrop escurecido quando o menu está aberto */}
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        ></div>
      )}
      
      <aside 
        className={`font-mono bg-white dark:bg-neutral-900 text-gray-200 dark:text-gray-200 p-4 flex flex-col justify-between 
        w-64 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 z-40`}
      >
        <div>
          <div className="mb-8">
            <h1 className="text-2xl font-mono font-bold">CRUD</h1>
          </div>
          <nav>
            <ul>
              <li className="mb-2">
                <Link href="/" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/clientes/novo" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                  Cadastrar Clientes
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/clientes" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                  Gerenciar Clientes
                </Link>
              </li>
              <li>
                <Link href="/swagger" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                  Documentação Swagger
                </Link>
              </li>
              <li>
                <Link href="/autenticacao" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                  Autenticação
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <button 
            onClick={() => window.open("https://github.com/Jeancaetano12/Primeiro-Crud", "_blank")}
            className="block ml-9 p-2 rounded text-center bg-blue-600 text-white hover:bg-blue-700"
          >
            Ver Repositorio
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}