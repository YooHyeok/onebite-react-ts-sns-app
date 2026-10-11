import { deleteComment } from "@/api/comment";
import type { useMutationCallback } from "@/type";
import { useMutation } from "@tanstack/react-query";

export function useDeleteComment(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn:deleteComment,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    }
  })

}