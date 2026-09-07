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