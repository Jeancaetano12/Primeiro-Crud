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
import DashboardLayout from "@/app/components/DashboardLayout";

export default function PaginaInicial() {
    return (
        <DashboardLayout>
            <h1 className="text-center text-3xl font-mono font-bold text-gray-800 dark:text-gray-200">
                Página Inicial
            </h1>
            <hr />
        </DashboardLayout>
    )
}

