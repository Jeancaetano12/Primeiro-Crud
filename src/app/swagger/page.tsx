/**
 * Nome do arquivo: route.ts
 * Data de criação: 25/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Página para documentação Swagger.
 * Este script é parte o curso de ADS.
 */

'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { useEffect, useState } from 'react';
import DashboardLayout from '@/app/components/DashboardLayout';

export default function SwaggerPage() {
    const [spec, setSpec] = useState(null);

    useEffect(() => {
        const fetchSwaggerSpec = async () => {
            const response = await fetch('/api/swagger');
            const data = await response.json();
            setSpec(data);
        };
        fetchSwaggerSpec();
    }, []);

    return (
        <DashboardLayout>
            <div className="font-mono font-bold text-gray-800 dark:text-gray-200 prose dark:prose-invert max-w-none">
            {spec ? <SwaggerUI spec={spec} /> : <p>Carregando documentação...</p>}
            </div>
        </DashboardLayout>
    )
}