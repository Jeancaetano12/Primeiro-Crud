/**
 * Nome do arquivo: route.ts
 * Data de criação: 10/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Rota de API para listar e cadastrar clientes.
 * Este script é parte o curso de ADS.
 */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // Chamando client prisma para acessar o banco
// import { createClientAuth } from '@/app/lib/supabase/server'; /// Deixado aqui caso volte a usar RLS do Supabase
// import { supabase } from '@/app/lib/supabase/client'; /// Deixado aqui caso volte a usar o cliente do Supabase

const prisma = new PrismaClient();

export async function GET() {
  try {
    const clientes = await prisma.clientes.findMany();
    return NextResponse.json(clientes);
  } catch (error) {
    console.error("Erro na função GET usando prismaClient:", error);
    return NextResponse.json({ error: "Erro na função GET usando prismaClient:" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const novoCliente = await request.json();
    const clienteCriado = await prisma.clientes.create({
      data: novoCliente
    });
    return NextResponse.json(clienteCriado, { status: 201 });
  } catch (error) {
    console.error("Erro na função POST usando prismaClient:", error);
    return NextResponse.json({ error: "Erro na função POST usando prismaClient:" }, { status: 500 });
  }
}