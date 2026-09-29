import { updatePost } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import type { Post, useMutationCallback } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdatePost(callbacks?: useMutationCallback) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      if (callbacks?.onSuccess) callbacks.onSuccess()
      // post가 수정된 후 재조회
      // 1. 캐시 데이터 초기화 / (2.) 캐시 데이터에 완성된 포스트만 추가 / 3. 낙관적 업데이트 방식(onMutate)
      queryClient.setQueryData<Post>(
        QUERY_KEYS.post.byId(updatedPost.id),
        (prevPost) => {
          if (!prevPost) throw new Error(`${updatedPost.id}에 해당하는 포스트를 캐시 데이터에서 찾을 수 없습니다.`)
          return { ...prevPost, ...updatedPost }
        }
      )
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
    
  })
}