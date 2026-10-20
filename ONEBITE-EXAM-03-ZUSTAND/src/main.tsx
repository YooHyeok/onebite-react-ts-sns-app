import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

/**
 * 03-ZUSTAND 단원
 * 02 단원에서 도입한 React Router 위에서 소단원을 URL 로 분기한다.
 */
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
