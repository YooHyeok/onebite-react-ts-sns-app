import { create } from "zustand"

type Store = {
  count : number;
  increase: () => void;
  decrease: () => void;
}

/* create함수의 콜백함수를 통해 객체 형태의 store 객체를 반환한다. */
export const useCountStore = create<Store>((set, get) => ({
  count: 0, // state
  /* increase: () => {// action
    // get/set 함수 활용 업데이트
    const count = get().count; // get(): 현재 action의 소속 store 자체를 반환하므로 count state 접근이 가능하다.
    set({ count: count + 1})  // set(): 인수로 전달한 값으로 현재 store를 업데이트 시켜주는 함수. 명시되어 있는 프로퍼티만 초기화 state update
  }, */
  increase: () => {// action
    // 함수형 업데이트 : return 값으로 store를 업데이트 시킨다. 장점: 콜백함수의 매개변수로 현재 스토어의 값이 제공된다.
    set ((store) => ({ 
        count: store.count + 1
    }))
  }, 
  decrease: () => { // action
    set ((store) => ({ 
        count: store.count - 1
    }))
  },
}))