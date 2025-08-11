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
import { supabase } from '@/app/lib/supabaseClient'; // Ajuste o caminho se necessário

// UPDATE (PATCH)
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const clienteId = params.id;
  const dadosAtualizados = await request.json();

  const { data, error } = await supabase
    .from('clientes')
    .update(dadosAtualizados)
    .eq('id', clienteId) // A condição WHERE id = ...
    .select()
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}

// DELETE
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const clienteId = params.id;

  const { error } = await supabase
    .from('clientes')
    .delete()
    .eq('id', clienteId); // A condição WHERE id = ...

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  // 204 significa sucesso, sem conteúdo para retornar
  return new Response(null, { status: 204 });
}