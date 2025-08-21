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
// 1. Importe o cliente de SERVIDOR
import { createClientAuth } from '@/app/lib/supabase/server'; // Deixado aqui caso volte a usar RLS
import { supabase } from '@/app/lib/supabase/client'; // Importa o cliente do Supabase

export async function GET() {
  const { data, error } = await supabase.from('clientes').select('*');

  if (error) {
    console.error("Erro do Supabase:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const novoCliente = await request.json();

    const { data, error } = await supabase
    .from('clientes')
    .insert(novoCliente)
    .select()
    .single();

    if (error) {
      console.error("Erro ao inserir cliente:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Requisição inválida:", error);
    return NextResponse.json({ error: "Requisição inválida" }, { status: 500 });
  }
}