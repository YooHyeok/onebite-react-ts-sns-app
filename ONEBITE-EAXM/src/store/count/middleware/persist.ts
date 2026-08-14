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
  (store) => store.count,
  (count, prevCount) => {

    console.log(count, prevCount)
    
    const store = useCountStore.getState()
    useCountStore.setState((store) => ({}))
  })


/**
 * persist 미들웨어는 다른 미들웨어와 서로 의존하지 않으므로, 단독으로 사용할 수 있다.  
 * create만으로 순수하게 Store 정의하는것과 동일하게 Store 타입을 지정하되, persist함수의 인자로 전달되도록 persist의 호출이 create에 전달할 store 반환 콜백을 감싸도록 선언하면 된다.  
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
      increase: () => {
        console.log("persist increase")
        set((state) => ({ count: state.count + 1 }))
      },

      decrease: () =>{
        console.log("persist decrease")
        set((state) => ({ count: state.count - 1 }))
        },
      }
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