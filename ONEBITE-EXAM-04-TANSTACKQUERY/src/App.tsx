import "./App.css";
import { Link, Route, Routes } from "react-router";

// 01-react-state (순수 React: useState/useEffect)
import ReactStateListPage from "@/chapters/01-react-state/pages/todo-list-page";
// 02-query-hook (useQuery / useMutation 기본형)
import QueryHookListPage from "@/chapters/02-query-hook/pages/todo-list-page";
import QueryHookDetailPage from "@/chapters/02-query-hook/pages/todo-detail-page";
// 03-optimistic (낙관적 업데이트)
import OptimisticListPage from "@/chapters/03-optimistic/pages/todo-list-page";
import OptimisticDetailPage from "@/chapters/03-optimistic/pages/todo-detail-page";
// 04-normalization (캐시 정규화)
import NormalizationListPage from "@/chapters/04-normalization/pages/todo-list-page";
import NormalizationDetailPage from "@/chapters/04-normalization/pages/todo-detail-page";

/**
 * 소단원(시퀀스) 네비게이션 허브.
 * TodoList 를 구현하는 4가지 발전 단계를 각각 URL 로 분기한다. (코드 누적)
 */
function Nav() {
  return (
    <nav className="flex gap-3 border-b p-3">
      <Link to="/react-state">01. React State</Link>
      <Link to="/query-hook">02. Query Hook</Link>
      <Link to="/optimistic">03. Optimistic</Link>
      <Link to="/normalization">04. Normalization</Link>
    </nav>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<QueryHookListPage />} />

        {/* 01. 순수 React (상세 페이지 없음) */}
        <Route path="/react-state" element={<ReactStateListPage />} />

        {/* 02. Query Hook */}
        <Route path="/query-hook" element={<QueryHookListPage />} />
        <Route path="/query-hook/:id" element={<QueryHookDetailPage />} />

        {/* 03. Optimistic */}
        <Route path="/optimistic" element={<OptimisticListPage />} />
        <Route path="/optimistic/:id" element={<OptimisticDetailPage />} />

        {/* 04. Normalization */}
        <Route path="/normalization" element={<NormalizationListPage />} />
        <Route path="/normalization/:id" element={<NormalizationDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
