import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import IndexPage from "@/chapters/01-react-router/pages/index-page";
import SignInPage from "@/chapters/01-react-router/pages/sign-in-page";
import SignUpPage from "@/chapters/01-react-router/pages/sign-up-page";

/**
 * 중첩 라우트(Nested Routes)에서 공통 레이아웃을 담당하는 컴포넌트.
 * <Outlet /> 위치에 자식 라우트의 엘리먼트가 렌더링된다.
 */
function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      {/* 중첩 라우트: /sign-in, /sign-up 은 AuthLayout 을 공통 레이아웃으로 사용 */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
