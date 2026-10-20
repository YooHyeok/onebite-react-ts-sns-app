import Controller from "@/chapters/01-basic/components/controller";
import Viewer from "@/chapters/01-basic/components/viewer";

/**
 * 01-basic 소단원
 * 미들웨어 없이 순수 Zustand store 로 구성한 카운터 예제.
 */
export default function CounterBasicPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter — Basic</h1>
      <Viewer />
      <Controller />
    </div>
  );
}
