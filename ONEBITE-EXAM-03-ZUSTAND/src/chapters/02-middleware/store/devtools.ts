import { create } from "zustand"
import { combine, subscribeWithSelector, persist, createJSONStorage, devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

/* 
persist > devtools 미들웨어  
[Redux DevTools 크롬 확장 프로그램 설치](https://chromewebstore.google.com/detail/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=item-share-cb)
F12 개발자도구 > Redux 탭 > storage에 등록한 instance 선택 > state 탭 선택 > 브라우저 내 기능 실행 후 변화 확인
*/
export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count:0 }, (set, get) => ({
            actions: {
              increase: () => {
                console.log("devtools increase")
                set((state) => {
                  state.count += 1;
                })
              }, 
              decrease: () => {
                console.log("devtools decrease")
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
    ),
    {
      name: 'countStore',
    }
  )
)

useCountStore.subscribe(
  (store) => store.count, // selector
  (count, prevCount) => {

    console.log(count, prevCount)
    
    const store = useCountStore.getState()
    useCountStore.setState((store) => ({}))
  })

/**
 * devtools 미들웨어는 다른 미들웨어와 서로 의존하지 않으므로, 단독으로 사용할 수 있다.  
 * create만으로 순수하게 Store 정의하는것과 동일하게 Store 타입을 지정하되, devtools함수의 인자로 전달되도록 devtools의 호출이 create에 전달할 store 반환 콜백을 감싸도록 선언하면 된다.  
 */
type Store = {
  count : number;
  actions: {
    increase: () => void;
    decrease: () => void;
  }
}

create<Store>()(
  devtools((set) => ({
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