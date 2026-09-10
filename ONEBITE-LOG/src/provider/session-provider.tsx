import supabase from "@/lib/supabase";
import { useIsSessionLoaded, useSetSession } from "@/store/session";
import { useEffect, type ReactNode } from "react";

export default function SessionProvider({ children }: { children: ReactNode }) {
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded();

  useEffect(() => {
    /* 컴포넌트가 마운트되었을때 session 정보 업데이트 감지 이벤트 핸들러 등록 */
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event);
      setSession(session); // 최초 1회 호출 / 로그인 후에는 2회 호출
    });
  }, []);

  /**
   * [session 유효성 방어 렌더링 추가]
   * supabse client가 localstorage로 부터 데이터를 불러오는 시점은
   * 페이지 컴포넌트가 마운트 된 이후 시점이기 때문에 사용자의 세션 데이터는 아직 로딩중일수도 있다.
   * redux devtools 상의 INIT 상태에서는 컴포넌트가 처음 마운트되어 store가 초기화만 되어 있는 상태이기 때문에
   * zustand store state의 session 값이 null로 설정되는것을 확인할 수 있다.
   * 이러한 초기 마운트 상황을 고려하지 않게 되면 실제로는 session 데이터가 존재하여 인증이 완료된 사용자라고 할지라도
   * 초기 상태에서는 로그인이 되지 않은 것으로 판단이 되므로 의도치 않은 동작이 발생할 수 있다.
   */
  if (!isSessionLoaded) return <div>로딩 중...</div>;
  return children;
}
