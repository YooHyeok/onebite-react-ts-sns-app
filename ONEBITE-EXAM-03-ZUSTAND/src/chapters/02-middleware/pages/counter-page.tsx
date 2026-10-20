/**
 * 02-middleware 소단원
 * Zustand 미들웨어(combine / immer / subscribeWithSelector / persist / devtools) 예제.
 *
 * [소단원 내 버전 전환 - 코드 누적]
 * 미들웨어 종류별로 store 와 controller/viewer 가 분리되어 있다.
 * 보고 싶은 미들웨어의 import 쌍만 주석 해제하면 된다. (기본: devtools)
 */
/* import Controller from "@/chapters/02-middleware/components/combine/controller";
import Viewer from "@/chapters/02-middleware/components/combine/viewer"; */
/* import Controller from "@/chapters/02-middleware/components/immer/controller";
import Viewer from "@/chapters/02-middleware/components/immer/viewer"; */
/* import Controller from "@/chapters/02-middleware/components/subscribeWithSelector/controller";
import Viewer from "@/chapters/02-middleware/components/subscribeWithSelector/viewer"; */
/* import Controller from "@/chapters/02-middleware/components/persist/controller";
import Viewer from "@/chapters/02-middleware/components/persist/viewer"; */
import Controller from "@/chapters/02-middleware/components/devtools/controller";
import Viewer from "@/chapters/02-middleware/components/devtools/viewer";

export default function CounterMiddlewarePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter — Middleware</h1>
      <Viewer />
      <Controller />
    </div>
  );
}
