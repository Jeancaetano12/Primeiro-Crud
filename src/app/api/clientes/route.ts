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
import { createClient } from '@/app/lib/supabase/server';

export async function GET() {
  const supabase = createClient();
  // RLS de leitura podem precisar de um usuário autenticado no futuro,
  // então é bom já usar o cliente correto aqui também.
  const { data, error } = await supabase.from('clientes').select('*');

  if (error) {
    console.error("Erro do Supabase:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  // 2. Crie uma instância do cliente autenticado
  const supabase = createClient();

  try {
    // 3. Verifique quem é o usuário logado
    const { data: { user } } = await supabase.auth.getUser();

    // Se não houver usuário, retorne um erro de não autorizado
    if (!user) {
      return NextResponse.json({ error: 'Ação não autorizada.' }, { status: 401 });
    }

    const novoCliente = await request.json();

    // 4. ADICIONE O ID DO USUÁRIO AO NOVO CLIENTE ANTES DE INSERIR!
    const dadosParaInserir = {
      ...novoCliente,
      user_id: user.id, // Esta é a correção fundamental
    };

    const { data, error } = await supabase
      .from('clientes')
      .insert(dadosParaInserir) // Insere os dados com o user_id
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