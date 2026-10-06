import { updateProfile } from "@/api/profile";
import { QUERY_KEYS } from "@/lib/constants";
import type { ProfileEntity, useMutationCallback } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateProfile(callbacks?: useMutationCallback) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (updatedProfile) => {
      if (callbacks?.onSuccess) callbacks.onSuccess()
      // post가 수정된 후 재조회
      // 1. 캐시 데이터 초기화 / (2.) 캐시 데이터에 완성된 포스트만 추가 / 3. 낙관적 업데이트 방식(onMutate)
      queryClient.setQueryData<ProfileEntity>(
        QUERY_KEYS.profile.byId(updatedProfile.id),
        (prevProfile) => {
          if (!prevProfile) throw new Error(`${updatedProfile.id}에 해당하는 프로필을 캐시 데이터에서 찾을 수 없습니다.`)
          return { ...prevProfile, ...updatedProfile }
        }
      )
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
    
  })
}