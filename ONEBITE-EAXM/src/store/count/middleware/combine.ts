import { create } from "zustand"
import { combine } from "zustand/middleware"

/* 
combine 미들웨어  
첫번째 매개변수로 객체 타입의 state를, 두번째 매개변수로 콜백함수 타입의 action을 정의한다.  
combine 미들웨어로 store를 정의하게 되면 자동으로 타입을 추론한다.  
주의할 점은 현재 store의 타입을 첫번째 인수로 전달한 state값만 포함하는 타입으로 추론한다.  
get() 메소드에 마우스 호버를 해보면 타입이 state인 count값만 포함하는 객체타입으로 추론된다.  
물론 어디까지나 타입만 추론되는것 뿐이며, 실제 get 메소드를 통해 불러온 store나 
set 메소드의 콜백함수의 매개변수로 제공하는 store의 action 함수가 제공되지 않는것은 아니다.  
그렇기 때문에 함수 내부에서 get().actions.increase() 와 같은 함수를 호출한다고 해서 런타임 에러가 발생하지는 않으며,
increase() 같은 함수 내부에서 또 다른 action 함수를 호출하거나 접근하는 경우는 사실상 거의 없기 때문에 대부분 신경쓰지 않는다.  
따라서 combine 미들웨어를 사용하게 되면, set 메소드의 콜백 함수의 매개변수 이름도 store 라기 보다 state로 오해를 유발하지 않도록 표기하곤 한다.  
*/
export const useCountStore = create(
  combine({ count:0 }, (set, get) => ({
    actions: {
      increase: () => {
        set ((state) => ({ 
            count: state.count + 1
        }))
      }, 
      decrease: () => {
        set ((state) => ({ 
            count: state.count - 1
        }))
      },
    }
  })
))

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