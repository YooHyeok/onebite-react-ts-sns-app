import { create } from "zustand"
import { combine, subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

/* 
subscribeWithSelector 미들웨어  
selector 함수를 통해 store의 특정 값을 구독함으로써 해당 값이 변경될 때마다 어떠한 기능을 추가로 수행하도록 만들어주는 React의 useEffect와 비슷한 기능을 수행한다.  
사용자가 로그아웃을 해서 세션을 보관하는 store의 값이 바뀌었을 때 로그인 페이지로 다시 보내는등의 사이드 이펙트를 관리할 때 종종 사용된다.
*/
export const useCountStore = create(
  subscribeWithSelector(
    immer(
      combine({ count:0 }, (set, get) => ({
        actions: {
          increase: () => {
            console.log("subscribeWithSelector increase")
            set((state) => {
              state.count += 1;
            })
          }, 
          decrease: () => {
            console.log("subscribeWithSelector decrease")
            set((state) => {
              state.count -= 1;
            })
          },
        }
      }))
    )
  )
)

/**
 * 첫번째 매개변수 콜백함수로 셀렉터 함수를 전달하면서, 어떠한 값을 구독할지 선택한다.  
 * 두번째 매개변수 콜백함수의 매개변수는 첫번째 매개변수 콜백함수의 셀렉터함수가 구독한 대상을 받게 된다.  
 * 해당 콜백함수는 구독 대상 값이 변경될때 호출되며, listener라고 부르며, 첫번째 매개변수 값은 현재 구독중인 실시간으로 변경된 최신 값이다.
 * listener 함수에는 두번째 매개변수로 구독중인 count state가 업데이트 되기 이전의 값인 previousSelectedState를 받는다.  
 * 
 */
useCountStore.subscribe(
  (store) => store.count, // selector
  (count, prevCount) => {
    console.log(count, prevCount) // listener : count 값이 변경되면 로그 출력
    /* 함수 내부에서는 현재 store를 불러오거나 현재 store의 특정 값을 업데이트 하는것또한 가능하다. */
    const store = useCountStore.getState() // store 불러오기
    useCountStore.setState((store) => ({})) // store 변경하기 : 현재 구독중인 state를 변경할경우 subscribe가 계속 호출되므로, 무한루프 발생.
  })


/**
 * 
 */

type Store = {
  count : number;
  actions: {
    increase: () => void;
    decrease: () => void;
  }
}

create<Store>()(
  subscribeWithSelector((set) => ({
    count: 0,
    actions: {
      increase: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      decrease: () =>
        set((state) => ({
          count: state.count - 1,
        })),
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