/**
 * Nome do arquivo: layout.tsx
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
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Usando a fonte padrão Inter
import { Toaster } from 'react-hot-toast';
import './globals.css';

// Configurando a fonte Inter
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Primeiro CRUD',
  description: 'Criado com Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      {/* Aplicando a classe da fonte Inter ao body */}
      <body className={inter.className}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
