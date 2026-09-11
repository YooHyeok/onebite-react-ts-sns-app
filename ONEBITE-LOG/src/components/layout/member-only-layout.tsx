import { useSession } from "@/store/session";
import { Navigate, Outlet } from "react-router";

export default function MemberOnlyLayout() {
  const session = useSession();
  if (!session) return <Navigate to={"/sign-in"} replace={true} />;
  /* session이 있다면 index 페이지로 리다이렉션 */

  return <Outlet />;
}
