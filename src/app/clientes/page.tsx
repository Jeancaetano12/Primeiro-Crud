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
import PatchModal from '../components/PatchModal';
import Modal from '../components/PatchModal';

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

  // --Estados para o modal--
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Cliente | null>(null);
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', cpf: '' });

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

  // --- Funções para controlar o Modal ---
  const handleOpenModal = (cliente: Cliente) => {
    setEditingClient(cliente);
    setFormData({
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone || '',
      cpf: cliente.cpf || ''
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingClient(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingClient) return;

    const promise = fetch(`/api/clientes/${editingClient.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error('Falha ao atualizar o cliente.');
      }
      return response.json();
    });

    toast.promise(promise, {
      loading: 'Atualizando cliente...',
      success: (updatedClient) => {
        // Atualiza a lista de clientes na tela com os novos dados
        setClientes(clientes.map(c => c.id === updatedClient.id ? updatedClient : c));
        handleCloseModal();
        return `Cliente "${updatedClient.nome}" atualizado com sucesso!`;
      },
      error: (err) => `Erro: ${err.message}`,
    });
  };
  

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
                {/* 2. Botão de atualizar agora abre o modal */}
                <button 
                  onClick={() => handleOpenModal(cliente)} 
                  className="px-4 py-2 text-sm text-center bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Atualizar
                </button>
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
      {/* 3. O Modal é renderizado aqui */}
      <PatchModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Editar Cliente</h2>
        <form onSubmit={handleUpdateSubmit}>
          <div className="space-y-4">
            {/* Campos do formulário */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
              <input type="text" id="nome" value={formData.nome} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleFormChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"/>
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefone</label>
              <input type="text" id="telefone" value={formData.telefone} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"/>
            </div>
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CPF</label>
              <input type="text" id="cpf" value={formData.cpf} onChange={handleFormChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"/>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500">
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Salvar Alterações
            </button>
          </div>
        </form>
      </PatchModal>
    </DashboardLayout>
  );
}