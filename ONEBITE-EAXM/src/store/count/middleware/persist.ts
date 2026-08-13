import { create } from "zustand"
import { combine, subscribeWithSelector, persist, createJSONStorage } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

/* 
persist 미들웨어  
store의 값을 브라우저의 스토리(로컬/세션)에 보관하도록 해주는 미들웨어  
다른 미들웨어와 동일한 방식으로 감싸듯 적용하되, 두번째 매개변수로 객체 형태의 옵션을 추가한다.  
name 이라는 프로퍼티로 store가 브라우저의 스토리지에 보관될때 어떤 이름으로 보관될지에 대한 이름을 지정해준다.  
로컬 스토리지에 값을 보관할때는 JSON이라는 형태로 파싱해서 보관하게 되는데, actions와 같은 자바스크립트의 함수는 JSON으로 파싱이 되지 않기 때문에  
해당 속성은 빈 객체로 저장된다.  
함수에는 객체나 배열 등 과는 달리 실행 컨텍스트 혹은 스코프 체인, 외부 변수와의 클로저 관계 등 굉장히 복잡한 정보들이 많이 저장되어있기 때문에 파싱되지 않는다.  
그러나 Zustand는 persist를 이용해 로컬 스토리지에 보관해 둔 값을 새로고침 했을 때 그대로 다시 불러와 store에 적용시켜 주기 때문에,  
actions 내에 선언된 함수를 호출하는 기능에 장애가 발생하게 된다.  
이때 두번째 매개변수 옵션 객체에 partialize 셀렉터 함수를 전달함으로써 현재 스토어의 값들 중 어떤 것들을 스토리지에 보관할 것인지 직접 명시해 주는것이 안전하다.  

*/
export const useCountStore = create(
  persist(
    subscribeWithSelector(
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
    ),
    {
      name: 'countStore',
      partialize: (store) => ({count: store.count}),
      storage: createJSONStorage(() => sessionStorage)
    },
  )
)

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
  persist((set) => ({
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
    }),
    {
      name: 'countStore',
      partialize: (store) => ({count: store.count}),
      storage: createJSONStorage(() => sessionStorage)
    }
  ),
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