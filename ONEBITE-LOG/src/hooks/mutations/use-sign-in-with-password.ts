import { signInWithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

/**
 * 역할 분리
 * 코드의 역할에 따라 레이어를 명확하게 분리함으로써 책임의 분리가 확실해진다.  
 * 유지보수나 협업 측면에서 굉장히 큰 도움이 된다.
 * 
 * 훅 내부에서는 오류 메시지 로깅, 캐시 데이터 처리 등 비즈니스 로직만 수행하고,
 * UI와 사용자 상호작용 등 화면에 대한 처리를 콜백함수를 통해 모두 컴포넌트에서 처리하도록 역할 분리.
 * 
 * @param callbacks 
 * @returns 
 */
export function useSignInWithPassword(callbacks?: {onError: (error:Error) => void}) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      /* 비즈니스 로직 */
      console.error(error);
      /* 콜백함수를 통해 화면에 위임 */
      if (callbacks?.onError) callbacks.onError(error)
    }
  })
}