import supabase from "@/lib/supabase";
import type { AuthResponse } from "@supabase/supabase-js";

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