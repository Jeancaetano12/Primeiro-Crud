/**
 * Nome do arquivo: page.tsx
 * Data de criação: 11/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Pagina para cadastrar clientes.
 * Este script é parte o curso de ADS.
 */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook para redirecionamento
import DashboardLayout from '@/app/components/DashboardLayout';

export default function NovoClientePage() {
  const router = useRouter(); // Inicializa o hook de roteamento
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Previne o recarregamento da página
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, telefone, cpf }),
      });

      if (!response.ok) {
        // Pega a mensagem de erro da API se houver
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao cadastrar o cliente.');
      }

      // Se tudo deu certo, exibe uma mensagem de sucesso
      window.alert('Cliente cadastrado com sucesso!');
      // Se tudo deu certo, redireciona o usuário de volta para a lista
      router.push('/clientes');

    } catch (err: any) {
        window.alert(err.message);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl mb-6 font-mono font-bold text-gray-800 dark:text-gray-200">
        Cadastrar Novo Cliente
      </h1>
      <hr />
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="mt-6 max-w-lg gap-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome
             </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {error && <p className="mt-4 text-red-500">{error}</p>}

          <div className="space-y-4">
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Telefone
              </label>
              <input 
                type="text"
                id="telefone"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              {submitting ? 'Salvando...' : 'Salvar Cliente'}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

  