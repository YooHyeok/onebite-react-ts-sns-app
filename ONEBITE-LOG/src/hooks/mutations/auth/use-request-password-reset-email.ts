import { requestPasswordRestEmail } from "@/api/auth";
import type { useMutationCallback } from "@/type";
import { useMutation } from "@tanstack/react-query";

export function useRequestPasswordResetEmail(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: requestPasswordRestEmail,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess()
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error)
    }
  })
}