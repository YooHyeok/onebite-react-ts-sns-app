import { updateComment } from "@/api/comment";
import { QUERY_KEYS } from "@/lib/constants";
import type { Comment, useMutationCallback } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateComment(callbacks?: useMutationCallback) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:updateComment,
    onSuccess: (updatedComment) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      queryClient.setQueryData<Comment[]>(
        QUERY_KEYS.comment.post(updatedComment.post_id),
        (comments) => {
          if (!comments) throw new Error("댓글이 캐시 데이터에 보관되어있지 않습니다.")
          return comments.map((comment)=> {
            if (comment.id === updatedComment.id) return {...comment, ...updatedComment} // 현재 순회중인 comment가 업데이트된것이므로, 기존 comment와 수정완료된 항목과 병합(덮어씌움)
            return comment;
          })
        }
      )
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    }
  })

}