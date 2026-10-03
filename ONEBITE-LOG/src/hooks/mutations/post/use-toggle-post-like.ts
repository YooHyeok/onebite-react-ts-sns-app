import { togglePostLike } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import type { Post, useMutationCallback } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useTogglePostLike(callbacks?: useMutationCallback) {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: togglePostLike,
    onMutate: async ({postId}) => {
      /* 좋아요 낙관적 업데이트 */
      await queryClient.cancelQueries({ // 이전에 발생한 조회 요청으로 인해 덮어씌워 지지 않도록 취소(최신 동기화 조정)
        queryKey: QUERY_KEYS.post.byId(postId)
      })
      const prevPost = queryClient.getQueryData<Post>(
        QUERY_KEYS.post.byId(postId),
      )
      queryClient.setQueryData<Post>(
        QUERY_KEYS.post.byId(postId),
        (post) => {
          if (!post) throw new Error("포스트가 존재하지 않습니다.")
          return {
            ...post,
            isLiked: !post.isLiked,
            like_count: post.isLiked ? post.like_count - 1 : post.like_count + 1
          }
        }
      )
      return {
        prevPost // error가 발생했을때 onError의 3번째 매개변수로 받을 수 있다.
      }
    },
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error, _, context) => {
      if (context && context.prevPost) { // 낙관적 업데이트 오류 발생시 데이터 원상복구
        queryClient.setQueryData(
          QUERY_KEYS.post.byId(context?.prevPost.id),
          context.prevPost
        )
      }
      if (callbacks?.onError) callbacks.onError(error);
    },
  })
}