import { deleteImagesInPath } from "@/api/image";
import { deletePost } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import type { useMutationCallback } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeletePost(callbacks?: useMutationCallback) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: async (deletedPost) => {
      if (callbacks?.onSuccess) callbacks.onSuccess()
      // 이미지 삭제 기능
      if (deletedPost.image_urls && deletedPost.image_urls.length > 0) {
        await deleteImagesInPath(`${deletedPost.author_id}/${deletedPost.id}`)
      }
      // post가 수정된 후 재조회
      // (1.) 캐시 데이터 초기화 / 2. 캐시 데이터에 완성된 포스트만 추가 / 3. 낙관적 업데이트 방식(onMutate)
      queryClient.resetQueries({ // 무한스크롤로 페이지 사이즈가 5에서 4로 변경되어, 다음 스크롤에서 꼬이게됨. (다음 페이지를 못불러오는 현상 발생)
        queryKey: QUERY_KEYS.post.list
      })
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
    
  })
}