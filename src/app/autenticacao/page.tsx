/**
 * Nome do arquivo: Page.tsx
 * Data de criação: 12/08/2025
 * Autor: Jean Caetano
 * Matrícula: 01735073
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por autenticar o usuario para o sistema
 * e assim garantir a segurança e integridade dos dados.
 * Este script é parte o curso de ADS.
 */

// Na sua pasta de autenticação, dentro do arquivo page.tsx
'use client';

// import { createClient } from '../lib/supabase/client'; <-- RECURSO DESATIVADO
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../components/DashboardLayout';

export default function PaginaDeAutenticacao() {
/** 
  const supabase = createClient();
  const router = useRouter();

  // Este 'useEffect' observa mudanças no estado de autenticação.
  // Se um usuário fizer login, ele será redirecionado.
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      // Redireciona para a página de clientes após o login bem-sucedido
      router.push('/clientes');
    }
  });
*/
  return (
    <DashboardLayout>
        <h1 className="text-center text-3xl font-mono font-bold text-gray-800 dark:text-gray-200">
            Autenticação de Usuário
        </h1>
        <hr />

        <div className="mt-4 flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div>
                    <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                        Recurso Desativado
                    </h1>
                    <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                        Pagina em construção.
                    </p>
                </div>
                {/* Este é o componente mágico do Supabase */}
                {/* RECURSO DESATIVADO */}
                {/*<Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    providers={['github', 'google']} // Exemplo: adicione login com GitHub e Google
                    localization={{
                        variables: {
                            sign_in: {
                                email_label: 'Seu email',
                                password_label: 'Sua senha',
                                button_label: 'Entrar',
                                link_text: 'Já tem uma conta? Entre',
                            },
                            sign_up: {
                                email_label: 'Seu email',
                                password_label: 'Crie uma senha',
                                button_label: 'Cadastrar',
                                link_text: 'Não tem uma conta? Cadastre-se',
                            },
                            forgotten_password: {
                                email_label: 'Seu email',
                                button_label: 'Enviar instruções',
                                link_text: 'Esqueceu sua senha?',
                            },
                        },
                    }}
                />*/} 
            </div>
        </div>
    </DashboardLayout>   
  );
}