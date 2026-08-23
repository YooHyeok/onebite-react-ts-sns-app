import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/**
 * TanstackQuery를 이용해 관리하는 모든 서버 상태를 보관하는 일종의 저장소 즉, 스토어
 * API 요청의 응답값, 캐싱 값, 캐시 옵션들 등 서버 상태와 관련된 다양한 값들이 보관된다.  
 */
const queryClient = new QueryClient({
  defaultOptions: {
    // 캐시 옵션 글로벌
    queries: {
      staleTime: 0,
      gcTime: 5 * 60 * 1000, // 5분
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
