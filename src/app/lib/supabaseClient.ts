/**
 * Nome do arquivo: supabaseClient.ts
 * Data de criação: 10/08/2025
 * Autor: jean Caetano
 * Matrícula: 0173573
 *
 * Descrição:
 * Cliente Supabase para integração com PostgreSQL.
 * Este script é parte o curso de ADS.
 */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)