import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

/**
 * 02-ROUTER 단원
 * 이 단원에서 처음으로 React Router 를 도입한다.
 * 앱 전체를 <BrowserRouter> 로 감싸 클라이언트 사이드 라우팅을 활성화한다.
 */
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
