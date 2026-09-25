import { deletePost } from "@/api/post";
import type { useMutationCallback } from "@/type";
import { useMutation } from "@tanstack/react-query";

export function useDeletePost(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess()
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
    
  })
}