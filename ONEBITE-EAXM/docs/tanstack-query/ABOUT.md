# [_**Root/README.md**_](../../README.md)

# _**서버 상태관리 - Tanstack Query**_
<details>
<summary>접기/펼치기</summary>
<br>

## 서버상태관리란?

React앱의 상태를 분류한다 라고 하면 대다수가 간단하게 특정 컴포넌트에서만 접근이 가능한 `지역 상태`와 전체 컴포넌트에서 접근이 가능한 `전역 상태` 정도로만 구문을 할 것이다.  

예를 들어 앱의 테마나 세션 정보 같은 데이터가 있으면 모든 컴포넌트에서 접근이 가능해야 하므로 `전역 상태`로 분류 하게 될 것이다.  
반면, 특정 input 태그의 사용자 입력값 같은 데이터는 보통 특정 하나의 컴포넌트에서만 접근이 가능하면 되므로 `지역 상태`로 분류 하게 될 것이다.  

백엔드 서버로 부터 게시글 리스트 같은 데이터를 불러오기 위한 비동기 API 요청에 관련된 데이터가 있다면, 지역 상태와 전역 상태 중 어떤 상태로 분류해야 할까?  

단순하게 생각하면 해당 데이터를 하나의 컴포넌트만 이용할 수 있다고 한다면 지역 상태로 분류하고, 반대로 모든 컴포넌트가 다 이용할 수 있어야 한다면 전역 상태로 분류해서 처리하면 기능상의 오류가 발생하진 않겠지만, 서버에 보내는 API 요청에는 로딩 상태, 성공/실패 유무, 에러 객체, 캐시옵션 등 굉장히 많은 데이터가 포함되어 있다는 것이다.  

만약 이러한 모든 데이터를 zustand와 같은 전역 상태 관리 도구를 이용해 store를 생성해서 직접 관리하려고 한다면
```ts
const initialState = {
  isLoading: false,
  status: null,
  error: null,
  posts: null,
}
const usePostsRequestStore = create(combine(initialState, () => ({})))
```
위와같이 먼저 store 내부에 isLoading이나 status 등 굉장히 많은 state값들이 구성돼야 할것이다.  

```ts
const usePostsRequestStore = create(combine(initialState, () => ({
  action: {
    toggleIsLoading: () => {},
    setStatus: () => {},
    fetchPosts: () => {},
  }
})))
```

이러한 모든 state 값들을 관리하는 각각의 action 함수들 까지 함께 만들어 줘야 한다는 굉장히 수고로움을 필요로 하게 될것이다.  

설상 가상으로 대부분의 서비스들이 API 하나만 호출하지 않기 때문에 결국 이런 복잡하고 긴 코드를 여러개의 API 요청에 맞게 각각 일일이 다 만들어 줘야 될 것이다.  

결론적으로 API의 요청과 관련된 데이터들은 직접 관리해야 되는 데이터의 가짓수가 상당히 많기 때문에 zustand를 활용해서 전역 상태로 관리하기에는 상당한 무리가 있다.  
그렇다고 지역 상태로 관리하자니 여러 컴포넌트에서 데이터에 접근하기가 어려워 지고 어차피 관리해야 될 데이터가 많아서 코드가 복잡해지는 건 전역 상태나 마찬가지 이기 때문에 지역 상태로 관리하기에도 무리가 있다.  

실무에서는 이러한 데이터를 보통 지역 상태도 전역 상태도 아닌 `서버 상태` 라는 별도의 유형으로 구분해서 관리하게 된다.  

## TanStack Query란?
위에서 말한 서버 상태 유형으로 상태값들을 직접 다 관리 할 경우 앞선 예시와 같이 코드가 굉장히 복잡해질 것이 분명하므로 보통은 `TanStack Query`라는 서버 상태 관리를 위한 라이브러리를 사용한다.  

TanStack Query 압도적으로 현재 가장 많은 사람들이 사용하고 있는 대표적인 서버 상태 관리도구 이다.  

```tsx
export default function Component() {
  const { data, isLoading, error } = useQuery(/*...*/);

  if (error) return <div>오류가 발생했습니다!</div>
  if (isLoading) return <div>로딩 중 입니다 ...</div>
  return <div>{data}</div>
}
```
TanStack Query를 사용하면 위와같이 굉장히 짧은 코드만으로도 API 요청을 보내는 것은 물론 해당 요청의 데이터나 로딩 상태 또는 에러 상태 등등의 다양한 데이터들을 아주 편리하게 가져다 쓸 수 있게 된다.  

여기에 추가로 요청이 실패했을 때 Retry 옵션을 통해 다시 한번 요청을 보내게 한다거나, Cache 값을 이용해 중복 요청을 방지하는 등의 서버 상태 관리를 위한 굉장히 다양한 기능들이 제공된다.  

쉽게 말하여 TanStack Query는 비동기 요청에 상태를 매우 편리하게 관리하도록 도와주는 기능들을 제공하고 있다.  

</details>
<br>


# [_**Tanstack Query 가이드**_](ONEBITE-EAXM/docs/tanstack-query/GUIDE.md)
1. 