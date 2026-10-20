import "./App.css";

/**
 * [소단원 전환 방식 - 코드 누적]
 * 이 단원은 React Router를 도입하지 않으므로, URL이 아닌 "import 주석 토글"로
 * 소단원을 전환한다. 보고 싶은 소단원의 import 와 렌더링만 주석 해제하면 된다.
 *
 * - 01-tailwindcss : TailwindCSS 유틸리티 클래스 예제
 * - 02-shadcn      : Shadcn UI 컴포넌트 예제 (01의 Tailwind 위에 누적)
 */
import Tailwind from "@/chapters/01-tailwindcss/components/Tailwind";
// import Shadcn from "@/chapters/02-shadcn/components/Shadcn";

function App() {
  return (
    <div>
      <Tailwind />
      <Shadcn />
    </div>
  );
}

export default App;
