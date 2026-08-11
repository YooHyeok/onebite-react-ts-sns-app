import { create } from "zustand"
import { combine } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"


/* 
immer 미들웨어
불변성 관리를 도와주는 미들웨어이다.  
`state.count += 1`과 같이  state의 count값에 직접적으로 접근해서 값을 변경하는것이 아니라  
set() 메소드처럼 변경될 값을 포함한 새로운 객체를 만들어 전달하는 방식으로 업데이트 하는것을 불변성관리라고 표현한다.  
불변성 관리는 업데이트할 요소가 별로 없는 상황에서는 괜찮지만, 만약 업데이트 해야되는 데이터의 구조가 2번 3번 이상 중첩이 되는 등  
구조가 복잡해질수록 업데이트 하는 코드도 굉장히 복잡해진다는 단점이 있으며, immer 미들웨어는 이를 해결해준다.  
사용법은 create 함수의 매개변수로 정의되었던 combine 함수의 반환값을 immer 함수의 인자로 전달 하도록, immer의 호출이 combine을 감싸도록 선언하면 된다.  
*/
export const useCountStore = create(
  immer(
    combine({ count:0 }, (set, get) => ({
      actions: {
        increase: () => {
          set((state) => {
            state.count += 1;
          })
        }, 
        decrease: () => {
          set((state) => {
            state.count -= 1;
          })
        },
      }
    }))
  )
)

/**
 * combine 미들웨어와 immer 미들웨어는 서로 의존하지 않으므로, immer만 사용할 수 있다.  
 * create만으로 순수하게 Store 정의하는것과 동일하게 Store 타입을 지정하되, immer 함수의 인자로 전달되도록 immer의 호출이 create에 전달할 store 반환 콜백을 감싸도록 선언하면 된다.  
 */
type Store = {
  count : number;
  actions: {
    increase: () => void;
    decrease: () => void;
  }
}

create<Store>()(
  immer((set, get) => ({
    count: 0,
    actions: {
      increase: () =>
        set((state) => {
          state.count += 1;
        }),

      decrease: () =>
        set((state) => {
          state.count -= 1;
        }),
    },
  })),
);



export const useCount = () => {
  const count = useCountStore((state) => state.count)
  return count;
}
export const useIncreaseCount = () => {
  const increase = useCountStore((state) => state.actions.increase)
  return increase;
}
export const useDecreaseCount = () => {
  const decrease = useCountStore((state) => state.actions.decrease)
  return decrease;
}

export const useCountAction = () => ({
  increase: useCountStore((state) => state.actions.increase),
  decrease: useCountStore((state) => state.actions.decrease)
})