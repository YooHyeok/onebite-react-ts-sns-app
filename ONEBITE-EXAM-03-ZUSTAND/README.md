# ONEBITE-EXAM-03-ZUSTAND

한입 리액트 강의 **3단원: Zustand & 미들웨어, TodoList** 예제 프로젝트.

> React Router 위에서 소단원을 **URL 로 분기**한다. (`src/App.tsx` 의 `<Routes>`)
> 미들웨어 종류(combine/immer/subscribeWithSelector/persist/devtools)는 02 소단원 안에서
> `pages/counter-page.tsx` 의 **import 주석 토글**로 전환한다. (코드 누적)

## 소단원 구성

| 소단원 | 경로 | 위치 | 설명 |
|--------|------|------|------|
| 01. Basic | `/counter/basic` | [01-basic](src/chapters/01-basic/) | 순수 Zustand store |
| 02. Middleware | `/counter/middleware` | [02-middleware](src/chapters/02-middleware/) | combine / immer / subscribeWithSelector / persist / devtools |
| 03. TodoList | `/todolist` | [03-todolist](src/chapters/03-todolist/) | Zustand 기반 실전 TodoList |

문서: [docs](src/chapters/docs/) (ABOUT / GUIDE + assets)

## 폴더 구조

```
src/
├─ main.tsx                  # <BrowserRouter>
├─ App.tsx                   # 소단원 네비게이션 + <Routes>
├─ shared/
│   ├─ lib/utils.ts
│   ├─ types/todo-list.ts
│   └─ components/ui/         # button, input
└─ chapters/
    ├─ 01-basic/{store, components, pages}
    ├─ 02-middleware/{store(5종), components(5종), pages}
    ├─ 03-todolist/{store, pages, components}
    └─ docs/                  # ABOUT / GUIDE + assets/
```

## 실행

```bash
npm install
npm run dev
```

## 경로 alias

- `@/*` → `src/*`
- 공유 자원은 `@/shared/*`
