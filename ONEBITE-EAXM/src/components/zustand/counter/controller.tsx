import { Button } from "@/components/ui/button";
import {
  useCountStore,
  useDecreaseCount,
  useIncreaseCount,
  useCountAction,
} from "@/store/count/basic";

export default function Controller() {
  // const { increase, decrease } = useCountStore();

  /* 
  zustand는 컴포넌트에서 불러온 스토어의 상태값들 중에 하나라도 업데이트 되면 해당컴포넌트를 자동으로 리렌더링 시킨다.  
  Controller 컴포넌트에서는 store 객체의 전부를 모두 불러오고 있으며, 이 또한 리랜더링 대상이 된다.  
  decrease와 increase의 값만 불러오고 있을 뿐, useCountStore를 호출하는것 자체로는 count state 값도 반환 객체에 포함되기 때문이다.  
  */

  /* [1. Selector 함수 호출 방식] */
  // const increase = useCountStore((store) => store.increase); // 매개변수로 프로퍼티 직접접근
  // const decrease = useCountStore((store) => store.decrease);

  /* 1-1. 복수개 반환: selector가 실행될 때 마다 새 객체를 반환. zustand는 Object.is()를 통해 객체 내부가 아닌 참조를 비교하므로 zustand는 selector 결과가 바뀌었다고 판단하므로 불필요한 리렌더링이 발생한다. */
  // const { increase, decrease } = useCountStore((store) => ({ increase: store.increase, decrease: store.decrease }));

  /* 1-2. useShallow */
  // const { increase, decrease } = useCountStore(
  //   useShallow((store) => ({
  //     increase: store.increase,
  //     decrease: store.decrease,
  //   })),
  // );

  /* [2. Actions Property로 Wrapping] */
  // const { increase, decrease } = useCountStore((store) => store.actions);

  /* [3. 커스텀 훅 방식] */
  // const increase = useIncreaseCount();
  // const decrease = useDecreaseCount();
  const { increase, decrease } = useCountAction();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
