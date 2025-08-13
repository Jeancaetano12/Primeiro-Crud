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
import DashboardLayout from '../components/DashboardLayout';
import Link from 'next/link';
import toast from 'react-hot-toast';

type Cliente = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  created_at: string;
};

export default function GerenciarClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('/api/clientes');
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

  const handleDelete = async (clienteId: string, clienteNome: string) => {
    if (window.confirm(`Tem certeza que deseja deletar o cliente "${clienteNome}"?`)) {
      try {
        const response = await fetch(`/api/clientes/${clienteId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Falha ao deletar o cliente.');
        }

        setClientes(clientes.filter((cliente) => cliente.id !== clienteId));
        toast.success(`Cliente "${clienteNome}" deletado com sucesso!`);

      } catch (error: any) {
        toast.error(error.message);
        console.error('Erro ao deletar cliente:', error);
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-mono font-bold text-gray-800 dark:text-gray-200">
          Lista de Clientes
        </h1>
        <Link href="/clientes/novo" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Adicionar Cliente
        </Link>
      </div>
      <hr className="mb-6"/>

      {loading ? (
        <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando...</p>
      ) : (
        <div className="mt-6 space-y-4">
          {clientes.map((cliente) => (
            <div 
              key={cliente.id} 
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex justify-between items-center"
            >
              <div className="font-mono text-sm">
                <p className="text-lg font-sans font-bold text-gray-900 dark:text-gray-100">{cliente.nome}</p>
                <hr />
                <p className="text-gray-600 dark:text-gray-400">email: {cliente.email}</p>
                <p className="text-gray-600 dark:text-gray-400">telefone: {cliente.telefone}</p>
                <p className="text-gray-600 dark:text-gray-400">cpf: {cliente.cpf}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  criado em: {new Date(cliente.created_at).toLocaleDateString('pt-BR', 
                    { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'}
                  )}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <Link 
                  href={`/clientes/editar/${cliente.id}`} 
                  className="px-4 py-2 text-sm text-center bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Atualizar
                </Link>
                <button 
                  onClick={() => handleDelete(cliente.id, cliente.nome)}
                  className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}