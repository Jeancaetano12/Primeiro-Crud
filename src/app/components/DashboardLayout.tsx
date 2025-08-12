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
import { createClient } from '../lib/supabase/client'; // Importamos o cliente para o navegador
import type { User } from '@supabase/supabase-js'; // Importamos o tipo User para o TypeScript

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const supabase = createClient();
  
  // 2. Criamos um estado para armazenar os dados do usuário
  const [user, setUser] = useState<User | null>(null);

  // 3. useEffect para buscar o usuário quando o componente carregar
  useEffect(() => {
    const getUserData = async () => {
      // O método getUser() busca a sessão do usuário a partir dos cookies
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUserData();
  }, []); // O array vazio [] faz com que isso rode apenas uma vez

  // 4. Função para fazer logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    // Limpa o estado local e redireciona para a página de login
    setUser(null);
    router.push('/autenticacao');
    router.refresh(); // Garante que o estado do servidor seja atualizado
  };

  return (
    <div className="flex h-screen bg-neutral-900 dark:bg-gray-950">
      
      <aside className="w-64 font-mono bg-white dark:bg-neutral-900 text-gray-200 dark:text-gray-200 p-4 flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <h1 className="text-2xl font-monofont-bold">Meu CRUD</h1>
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
                <Link href="/autenticacao" className="block p-2 rounded hover:bg-cyan-200 dark:hover:bg-cyan-950">
                  Autenticação
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* 5. AQUI ESTÁ O FEEDBACK VISUAL */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          {user ? (
            // Se EXISTE um usuário logado, mostre isso:
            <div className="text-sm">
              <p className="font-semibold text-gray-900 dark:text-gray-100 truncate">{user.email}</p>
              <button 
                onClick={handleLogout} 
                className="w-full mt-2 text-left p-2 rounded text-red-500 hover:bg-red-500 hover:text-white"
              >
                Sair
              </button>
            </div>
          ) : (
            // Se NÃO EXISTE um usuário logado, mostre isso:
            <Link href="/autenticacao" className="block p-2 rounded text-center bg-blue-600 text-white hover:bg-blue-700">
              Fazer Login
            </Link>
          )}
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}