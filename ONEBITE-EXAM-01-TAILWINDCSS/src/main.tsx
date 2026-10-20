import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

/**
 * 01-TAILWINDCSS 단원
 * TailwindCSS / Shadcn 학습 단원으로, 아직 React Router를 도입하지 않는다.
 * 따라서 진입점에서는 별도의 Provider 없이 <App /> 만 렌더링한다.
 */
createRoot(document.getElementById("root")!).render(<App />);
