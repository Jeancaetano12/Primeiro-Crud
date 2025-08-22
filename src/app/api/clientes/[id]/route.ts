/**
 * Nome do arquivo: route.ts
 * Data de criação: 11/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Rota de API para atualizar e deletar clientes.
 * Este script é parte o curso de ADS.
 */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // Chamando client prisma para acessar o banco
// import { createClientAuth } from '@/app/lib/supabase/server'; /// Deixado aqui caso volte a usar RLS do Supabase
// import { supabase } from '@/app/lib/supabase/client'; /// Deixado aqui caso volte a usar o cliente do Supabase
const prisma = new PrismaClient();

export async function PATCH(request: Request, context: { params: { id: string } }) {
  try {
    // Acessamos o ID a partir do objeto 'context'
    const clienteId = context.params.id;
    const dadosAtualizados = await request.json();
    const clienteAtualizado = await prisma.clientes.update({
      where: { id: clienteId }, // Onde o ID for igual a clienteId
      data: dadosAtualizados,
    });
    return NextResponse.json(clienteAtualizado, {status: 200 });
  } catch (error) {
    console.error("Erro na função PATCH usando prismaClient:", error)
    return NextResponse.json({ error: "Erro na função PATCH usando prismaClient:"}, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
  try {
    // Acessamos o ID a partir do objeto 'context'
    const clienteId = context.params.id;

    await prisma.clientes.delete({
      where: { id: clienteId }, // Onde o ID for igual a clienteId

    });
    return NextResponse.json({ message: "Cliente deletado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro na função DELETE usando prismaClient:", error);
    return NextResponse.json({ error: "Erro na função DELETE usando prismaClient:" }, { status: 500 });
  }
}