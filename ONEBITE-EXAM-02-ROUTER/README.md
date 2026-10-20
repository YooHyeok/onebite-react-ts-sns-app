# ONEBITE-EXAM-02-ROUTER

한입 리액트 강의 **2단원: React Router** 예제 프로젝트.

> 이 단원에서 처음으로 **React Router 를 도입**한다. (`main.tsx` 의 `<BrowserRouter>`)
> 이후 03·04 단원은 이 라우터 위에서 소단원을 URL 로 분기한다.

## 소단원 구성

| 소단원 | 위치 | 문서 |
|--------|------|------|
| 01. React Router 기초 | [src/chapters/01-react-router/](src/chapters/01-react-router/) | [docs](src/chapters/01-react-router/docs/) |

## 라우트

| 경로 | 페이지 | 비고 |
|------|--------|------|
| `/` | IndexPage | |
| `/sign-in` | SignInPage | `AuthLayout` 중첩 라우트 |
| `/sign-up` | SignUpPage | `AuthLayout` 중첩 라우트 |

## 폴더 구조

```
src/
├─ main.tsx                  # <BrowserRouter> 도입
├─ App.tsx                   # <Routes> — index / sign-in / sign-up + AuthLayout
├─ index.css / App.css
└─ chapters/
    └─ 01-react-router/
        ├─ pages/            # index-page, sign-in-page, sign-up-page
        └─ docs/             # GUIDE.md
```

## 실행

```bash
npm install
npm run dev
```

## 경로 alias

- `@/*` → `src/*`
