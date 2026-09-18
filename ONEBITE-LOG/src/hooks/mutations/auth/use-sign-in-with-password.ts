import { signInWithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

/**
 * 4가지 콜백 함수를 포함하는 타입을 정의.
 * TanstackQuery 훅의 4가지 기본 제공 옵션에 대한 콜백 함수 타입으로 공통으로 사용
 */
import type { useMutationCallback } from "@/type";
export function useSignInWithPassword(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error)
    }
  })
}