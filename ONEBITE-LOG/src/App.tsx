import RootRoute from "@/root-route";
import supabase from "@/lib/supabase";
import { useEffect } from "react";
import { useSetSession } from "@/store/session";

export default function App() {
  const setSession = useSetSession();

  useEffect(() => {
    /* 컴포넌트가 마운트되었을때 session 정보 업데이트 감지 이벤트 핸들러 등록 */
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  return <RootRoute />;
}
