import { createPost, createPostWithImages } from "@/api/post";
import type { useMutationCallback } from "@/type";
import { useMutation } from "@tanstack/react-query";

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
  return useMutation({
    mutationFn: createPostWithImages,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess()
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
    
  })
}