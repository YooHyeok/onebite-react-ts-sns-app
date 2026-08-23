# [_**Root/README.md**_](../../README.md)

# _**전역 상태 관리와 Zustand**_
<details>
<summary>접기/펼치기</summary>
<br>

## 전역상태관리란?
![alt text](assets/image.png)  

복잡한 계층 구조를 갖는 리액트 앱이 있을때  

![alt text](assets/image-1.png)  

해당 앱의 모든 컴포넌트에서 접근 가능한 전역 상태.  
글로벌한 state값을 새롭게 생성하고 수정할 수 있도록 관리하는 것을 말한다.  

사용자의 현재 인증 정보 혹은 다크모드릉 위한 테마 정보, 쇼핑몰 서비스를 만든다면 장바구니에 담긴 정보처럼 리액트 앱의 모든 컴포넌트에서 접근할 수 있어야 되는 데이터들을 전역상태로 만들어 관리하는 행위 자체를 전역 상태 관리라고 표현한다.  

전역 상태 관리는 어느정도 규모가 있는 서비스를 만들기 위해서는 거의 반드시 필요하다.  

![alt text](assets/image-2.png)  

전역 상태 관리 없는 리액트에서는 props만을 이용해 오직 한단계 아래 자식 컴포넌트에게만  데이터를 전달할 수 있기 때문에  
위 사진과 같이 컴포넌트 계층 구조가 복잡해지면 복잡해질수록 전달돼야 하는 props가 계속해서 깊어지고 계속해서 중첩되어 데이터 공유가 굉장히 복잡해지고 불편해지는 이슈가 발생하며, 이를 props driling이라고 부른다.  
이런 props driling은 데이터의 공유 자체가 불편해진다는 문제뿐만 아니라 하나의 데이터가 업데이트 되었을 때 해당 데이터를 props로 전달받는 모든 컴포넌트들이 동시에 렌더링이 되어 버린다는 성능상의 이슈도 유발할 수 있기 때문에 꽤나 큰 문제점으로 다뤄진다.  

이러한 문제를 해결하기 위해 리액트의 내장 기능인 Context API를 비롯해서 Redux, Jotai, Recoil, Mobx Zustand 같은 전역 상태 관리 전용 라이브러리들 까지 제공되고 있다.  
Context API 같은 경우에는 정확히 전역 상태 관리를 위한 기능이라기 보다는 Props Drilling이라는 이슈를 해결하기 위해서 제공되는 기능이다.  

![alt text](assets/image-3.png)

위와 같이 전역 상태 관리를 하는 Context를 추가하게 되면, Context Provider가 공급하는 데이터를 컴포넌트 어디서든 전역으로 가져다 쓸수 있다.  
문제는 Context의 상태값이 한 번 업데이트 될 때마다 컨텍스트 하위의 모든 컴포넌트들이 불필요하게 다 리렌더링 될 수 있다는 치명적인 한계점이 존재한다.  

![alt text](assets/image-4.png)  

때문에, Context API는 완전히 전역적인 데이터를 관리하기 보다는 특정 컴포넌트 끼리만 공유하는 데이터를 다룰 때 더 효과적으로 사용할 수 있다.  

![alt text](assets/image-5.png)  

정리하자면, Context API는 보통 범용적인 전역 상태관리 보다는 국소적인 특정 컴포넌트들 사이에서만 공유되는 데이터 공유를 위해 더 자주 사용된다.  
따라서, 완전한 전역 상태 관리를 위해서는 Context API 보다는 Redux, Zustand, Mobx, Jotai Recoil 같은 전역 상태 관리를 위해 전용으로 만들어진 라이브러리들을 사용하는 것이 더 일반적이고 훨씬 더 좋은 접근이다.  

## Zustand란?
전역 상태를 관리해주는 라이브러리로, 많은 사람들이 사용하고 있으며, 용량이 매우 가볍고 굉장히 직관적이기 때문에 배우기가 쉽다.  
25년 08월 02일 기준 npm trends 사이트에서 가장 대표적으로 쓰이고 있는 5가지 전역상태관리 라이브러리들의 1년간 다운로드량을 비교해보면 전통 강자인 Redux를 뛰어 넘은것을 볼 수 있다.  

![alt text](assets/image-6.png)  

라이브러리별 용량 또한 Recoil이나 Mobx, Redux처럼 MB단위로 넘어가는 다른 라이브러리들에 비해 91.5KB라는 굉장히 작은 용량으로 제공되는 것을 볼 수 있다.  

![alt text](assets/image-7.png)  

이에 더해 화룡 정점으로 별도의 어떠한 설정 없이 create라는 함수를 호출하여 count state를 생성하고 state를 증감할 수 있는 상태변화 함수까지 한번에 생성하는 식으로 간단하게 전역상태를 관리할 수 있는 굉장히 단순하고 쉬운 사용방법을 제공하고 있다.  
```js
import { create } from "zustand"
const useCountStore = create((set, get) => ({
  count: 0,
  increase: () => set((state) => state + 1),
  decrease: () => set((state) => state - 1)
}))
```
</details>
<br>


# [_**Zustand 가이드**_](ONEBITE-EAXM/docs/zustand/GUIDE.md)
1. 기본 문법
2. 미들웨어