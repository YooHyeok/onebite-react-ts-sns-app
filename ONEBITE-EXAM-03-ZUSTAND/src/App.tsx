import "./App.css";
import { Link, Route, Routes } from "react-router";
import CounterBasicPage from "@/chapters/01-basic/pages/counter-page";
import CounterMiddlewarePage from "@/chapters/02-middleware/pages/counter-page";
import TodoListPage from "@/chapters/03-todolist/pages/todo-list-page";

/**
 * 소단원 네비게이션 허브.
 * 각 소단원을 URL 로 분기한다. (코드 누적 방식 — 이전 소단원도 라우트로 보존)
 */
function Nav() {
  return (
    <nav className="flex gap-3 border-b p-3">
      <Link to="/counter/basic">01. Basic</Link>
      <Link to="/counter/middleware">02. Middleware</Link>
      <Link to="/todolist">03. TodoList</Link>
    </nav>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<CounterBasicPage />} />
        <Route path="/counter/basic" element={<CounterBasicPage />} />
        <Route path="/counter/middleware" element={<CounterMiddlewarePage />} />
        <Route path="/todolist" element={<TodoListPage />} />
      </Routes>
    </>
  );
}

export default App;
