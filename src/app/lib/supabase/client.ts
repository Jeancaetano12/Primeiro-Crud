
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // o "!" no final garantem ao TypeScript que essas variáveis de ambiente existem.
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}