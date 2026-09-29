import { createPost, createPostWithImages } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import type { useMutationCallback } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreatePost(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess()
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
    
  })
}
export function useCreatePostWithImages(callbacks?: useMutationCallback) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createPostWithImages,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess()
      // post가 추가된 후 재조회 => (1.) 캐시 데이터 초기화 / 2. 캐시 데이터에 완성된 포스트만 추가 / 3. 낙관적 업데이트 방식(onMutate)
      // queryClient.invalidateQueries(); // 전체 데이터 재조회는 무한스크롤에서는 성능 이슈 발생
      queryClient.resetQueries({
        queryKey: QUERY_KEYS.post.list
      })

    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
    
  })
}