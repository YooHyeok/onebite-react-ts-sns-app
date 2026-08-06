# [_**Root/README.md**_](../../README.md)

# _**React Router**_
<details>
<summary>접기/펼치기</summary>
<br>

## 의존성 설치
```bash
npm install react-router@7
```
<br>

## BrowserRouter Entry Point 설정
- [main.tsx](../../src/main.tsx)  
  ```tsx
  /* 생략 */
  import { BrowserRouter } from "react-router";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  ```

<br>

## 기본 예제
react-router로 부터 Routes 컴포넌트와 Route 컴포넌트 두개를 불러와 사용한다.  
Routes 컴포넌트 하위에 Route 컴포넌트를 구성하며, 이때 Route 컴포넌트에 path props에 경로를 element props에 출력할 태그 혹은 컴포넌트를 매핑해준다.  

### DOM 적용 예제
- [App.tsx](../../src/App.tsx)
  ```tsx
  /* 생략 */
  import { Route, Routes } from "react-router";

  function App() {
    return (
      <Routes>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/sign-in" element={<div>SignIn</div>} />
        <Route path="/sign-up" element={<div>SignUp</div>} />
      </Routes>
    );
  }

  export default App;
  ```

<br>

### 컴포넌트 적용 예제

- [IndexPage.tsx](../../src/pages/index-page.tsx)
  ```tsx
  export default function IndexPage() {
    return <div>Index</div>;
  }
  ```
- [SignInPage.tsx](../../src/pages/sign-in-page.tsx)
  ```tsx
  export default function SignInPage() {
    return <div>SignInPage</div>;
  }
  ```
- [SignUpPage.tsx](../../src/pages/sign-up-page.tsx)
  ```tsx
  export default function SignUpPage() {
    return <div>SignUpPage</div>;
  }
  ```

- [App.tsx](../../src/App.tsx)  
  element props에 불러온 컴포넌트를 매핑해준다.  
  ```tsx
  /* 생략 */
  import { Route, Routes } from "react-router";
  import IndexPage from "@/pages/index-page";
  import SignInPage from "@/pages/sign-in-page";
  import SignUpPage from "@/pages/sign-up-page";

  function App() {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    );
  }

  export default App;
  ```

<br>

## 중첩 라우팅과 Outlet을 활용한 공통 레이아웃

로그인과 회원가입 페이지처럼 동일한 헤더나 푸터를 사용하는 페이지가 있다면, React Router의 **중첩 라우팅(Nested Routes)** 을 이용해 공통 레이아웃을 적용할 수 있다.  

먼저 공통 레이아웃을 사용할 라우트들을 부모 `Route` 아래에 배치한다.  

```tsx
<Route>
  <Route path="/sign-in" element={<SignInPage />} />
  <Route path="/sign-up" element={<SignUpPage />} />
</Route>
```

그다음 부모 `Route`의 `element`에 공통으로 사용할 레이아웃 컴포넌트를 지정한다.  

```tsx
<Route element={<AuthLayout />}>
  <Route path="/sign-in" element={<SignInPage />} />
  <Route path="/sign-up" element={<SignUpPage />} />
</Route>
```

이 부모 `Route`에는 `path`가 없으므로 별도의 URL 경로를 나타내지 않는다. 대신 자식 라우트를 묶고 공통 레이아웃을 적용하는 **레이아웃 라우트(Layout Route)** 역할을 한다.  

레이아웃 컴포넌트에는 일치한 자식 라우트가 렌더링될 위치를 나타내는 `<Outlet />`을 배치해야 한다.

```tsx
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}
```

사용자가 `/sign-in`에 접근하면 `<Outlet />` 위치에 `SignInPage`가 렌더링되고, `/sign-up`에 접근하면 `SignUpPage`가 렌더링된다.   `AuthLayout`의 헤더는 두 경로에서 공통으로 표시된다.  

```text
/sign-in → AuthLayout → Outlet에 SignInPage 렌더링
/sign-up → AuthLayout → Outlet에 SignUpPage 렌더링
```

- [App.tsx](../../src/App.tsx)
  ```tsx
  import { Outlet, Route, Routes } from "react-router";
  import IndexPage from "@/pages/index-page";
  import SignInPage from "@/pages/sign-in-page";
  import SignUpPage from "@/pages/sign-up-page";

  function AuthLayout() {
    return (
      <div>
        <header>Auth!</header>
        <Outlet />
      </div>
    );
  }

  function App() {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    );
  }

  export default App;
  ```

</details>
<br>
