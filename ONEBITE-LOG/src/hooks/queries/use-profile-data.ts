import { createProfile, fetchProfile } from "@/api/profile";
import { QUERY_KEYS } from "@/lib/constants";
import { useSession } from "@/store/session";
import type { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

export function useProfileData(userId?: string) {

  const session = useSession()
  const isMine = userId === session?.user.id

  return useQuery({
    queryKey: QUERY_KEYS.profile.byId(userId!), // !단언: null값이 아닐것임을 명시
    // queryFn: () => fetchProfile(userId!),
    queryFn: async () => {
      try {
        const profile = await fetchProfile(userId!);
        return profile;
      } catch (error) {
        if (isMine && (error as PostgrestError).code === 'PGRST116') {
          return await createProfile(userId!)
        }
        throw error;
        
      }
    },
    enabled: !!userId // userId가 유효한 값이 아니면 무조건 false 반환 (queryFn이 호출되지 않음.)
  })
}