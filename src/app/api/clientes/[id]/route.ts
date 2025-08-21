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
import { createClientAuth } from '@/app/lib/supabase/server'; // Deixado aqui caso volte a usar RLS
import { supabase } from '@/app/lib/supabase/client'; // Cliente Supabase genérico.
// UPDATE (PATCH)
// A assinatura foi alterada para ser mais robusta para o build.
export async function PATCH(request: Request, context: { params: { id: string } }) {

  try {
    // Acessamos o ID a partir do objeto 'context'
    const clienteId = context.params.id;
    const dadosAtualizados = await request.json();

    const { data, error } = await supabase
      .from('clientes')
      .update(dadosAtualizados)
      .eq('id', clienteId)
      .select()
      .single();

    if (error) {
      // É uma boa prática retornar a mensagem de erro em um objeto JSON
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });

  } catch (err) {
    return NextResponse.json({ error: 'Erro ao processar a requisição.' }, { status: 500 });
  }
}
// DELETE
// A assinatura foi alterada para ser mais robusta para o build.
export async function DELETE(request: Request, context: { params: { id: string } }) {

  try {
    // Acessamos o ID a partir do objeto 'context'
    const clienteId = context.params.id;

    const { error } = await supabase
      .from('clientes')
      .delete()
      .eq('id', clienteId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Retorno para sucesso sem conteúdo
    return new Response(null, { status: 204 });

  } catch (err) {
    return NextResponse.json({ error: 'Erro ao processar a requisição.' }, { status: 500 });
  }
}