import { create } from "zustand"

type Store = {
  count : number;
  /* increase: () => void;
  decrease: () => void; */
  actions: {
    increase: () => void;
    decrease: () => void;
  }
}

/* create함수의 콜백함수를 통해 객체 형태의 store 객체를 반환한다. */
export const useCountStore = create<Store>((set, get) => ({
  count: 0, // state
  /* [1. action 기본 정의] */
  /*  1-1. get/set 함수 활용 업데이트 */
  /* increase: () => {
    const count = get().count; // get(): 현재 action의 소속 store 자체를 반환하므로 count state 접근이 가능하다.
    set({ count: count + 1})  // set(): 인수로 전달한 값으로 현재 store를 업데이트 시켜주는 함수. 명시되어 있는 프로퍼티만 초기화 state update
  }, */
  /* 1-2. 함수형 업데이트 : return 값으로 store를 업데이트 시킨다. 장점: 콜백함수의 매개변수로 현재 스토어의 값이 제공된다. */
  /* increase: () => {// action
    set ((store) => ({ 
        count: store.count + 1
    }))
  }, 
  decrease: () => { // action
    set ((store) => ({ 
        count: store.count - 1
    }))
  }, */
  /* [2. Actions Property로 Wrapping] */
  actions: {
    increase: () => {// action
      console.log("basic increase")
      // 함수형 업데이트 : return 값으로 store를 업데이트 시킨다. 장점: 콜백함수의 매개변수로 현재 스토어의 값이 제공된다.
      set ((store) => ({
          count: store.count + 1
      }))
    }, 
    decrease: () => { // action
      console.log("basic decrease")
      set ((store) => ({ 
          count: store.count - 1
      }))
    },
  }
}))

/* [3. 커스텀 훅 방식: 수정사항에 쉽게 반응할 수 있는 action의 커스텀 훅] */
export const useCount = () => {
  const count = useCountStore((store) => store.count)
  return count;
}
export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase)
  return increase;
}
export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease)
  return decrease;
}

export const useCountAction = () => ({
  increase: useCountStore((store) => store.actions.increase),
  decrease: useCountStore((store) => store.actions.decrease)
})