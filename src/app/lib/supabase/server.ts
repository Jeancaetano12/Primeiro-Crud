/**
 * Nome do arquivo: supabaseClient.ts
 * Data de criação: 10/08/2025
 * Autor: jean Caetano
 * Matrícula: 0173573
 *
 * Descrição:
 * Cliente DE SERVIDOR Supabase para integração com PostgreSQL.
 * Este script é parte o curso de ADS.
 */
// src/lib/supabase/server.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}