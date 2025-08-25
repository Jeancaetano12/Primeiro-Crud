/**
 * Nome do arquivo: route.ts
 * Data de criação: 25/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Rota de API para documentação Swagger.
 * Este script é parte o curso de ADS.
 */

import { NextResponse } from "next/server";
import { openApiSpecification } from "@/app/lib/prisma/swagger";

export async function GET() {
    return NextResponse.json(openApiSpecification);
}