/**
 * Nome do arquivo: page.tsx
 * Data de criação: 11/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Pagina para Gerenciar clientes.
 * Este script é parte o curso de ADS.
 */
'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout'; // Importe o layout

type Cliente = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  created_at: string;
};

export default function PaginaDeClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('/api/clientes'); // Chama a API
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error('Falha ao buscar clientes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  return (
    // Envolvemos o conteúdo da página de clientes no mesmo layout
    <DashboardLayout>
      <h1 className="text-center text-3xl font-mono font-bold text-gray-800 dark:text-gray-200">
        Lista de Clientes
      </h1>
      <hr />
      {loading ? (
        <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando...</p>
      ) : (
        <ul className="mt-4 font-mono space-y-2">
          {clientes.map((cliente) => (
            <li key={cliente.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <strong className="text-gray-900 dark:text-gray-100">{cliente.nome}</strong>
              <hr />
              <p className="text-sm text-gray-600 dark:text-gray-400">email: {cliente.email}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">telefone: {cliente.telefone}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">cpf: {cliente.cpf}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">criado em: {new Date(cliente.created_at).toLocaleDateString('pt-BR',
                { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'}
              )}</p>
            </li>
          ))}
        </ul>
      )}
    </DashboardLayout>
  );
}