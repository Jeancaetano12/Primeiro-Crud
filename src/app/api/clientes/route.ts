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
import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";

export async function GET() {
    const { data, error } = await supabase.from('clientes').select('*');
    console.log("Dados recebidos com sucesso:");

    if (error) {
        console.error("Erro do Supabase:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

export async function POST(request: Request) {
    try {
        const novoCliente = await request.json(); // Pega os dados enviados pelo formulário

        // Insere os dados no banco
        const { data, error } = await supabase
            .from('clientes')
            .insert([novoCliente])
            .select() // .select() retorna o registro que acabou de ser criado
            .single(); // .single() para garantir que você receba um objeto, não um array

        if (error) {
            console.error("Erro ao inserir cliente:", error.message);
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }
        return new Response(JSON.stringify(data), { status: 201 }); // 201 = Created
    } catch (error) {
        console.error("Requisição inválida:", error);
        return new Response(JSON.stringify({ error: "Requisição inválida" }), { status: 500 });
    }
}