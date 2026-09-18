import { signUp } from "@/api/auth";
import type { useMutationCallback } from "@/type";
import { useMutation } from "@tanstack/react-query";

export function useSignUp(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: signUp,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    }
  })
}