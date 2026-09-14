import supabase from "@/lib/supabase";
import type { AuthResponse, OAuthResponse, Provider } from "@supabase/supabase-js";

export async function signUp({email, password}: {email: string, password: string}) {
  const { data, error }: AuthResponse = await supabase.auth.signUp({email, password})
  if (error) throw error
  return data;

}
export async function signInWithPassword({email, password}: {email: string, password: string}) {
  const { data, error }: AuthResponse = await supabase.auth.signInWithPassword({email, password})
  if (error) throw error
  return data;

}

export async function signInWithOAuth(provider: Provider) {
  const { data, error }: OAuthResponse = await supabase.auth.signInWithOAuth({
    provider
  })
  if (error) throw error
  return data;
}

export async function requestPasswordRestEmail(email: string) {
  /**
   * VITE_SUPABASE_URL/auth/v1/verify?toekn={value}&type=recovery&redirect_to={사용자에게 제공될 비밀번호 재설정 url}
   * 
   * supabase가 해당 url로 요청하기 전에 token을 생성한다.
   * 실제 요청을 진행하며 해당 token값을 검증하여 유효하다면 redirect_to로 넘어온 주소로 리디렉션한다.
   */
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${import.meta.env.VITE_PUBLIC_URL}/reset-password`
  })
  if (error) throw error
  return data;
}