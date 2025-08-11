/**
 * Nome do arquivo: route.ts
 * Data de criação: 10/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Rota de API para listar clientes (CRUD).
 * Este script é parte o curso de ADS.
 */
import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";

export async function GET() {
    const { data, error } = await supabase.from('clientes').select('*');
    console.log("Dados recebidos:", data);

    if (error) {
        console.error("Erro do Supabase:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}