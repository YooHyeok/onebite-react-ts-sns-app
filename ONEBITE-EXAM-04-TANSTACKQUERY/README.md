# ONEBITE-EXAM-04-TANSTACKQUERY

한입 리액트 강의 **4단원: TanStack Query & TodoList** 예제 프로젝트.

> TodoList 를 구현하는 **4가지 발전 단계**를 시퀀스로 나누고, 각 시퀀스를 URL 로 분기한다. (코드 누적)
> 뒤 시퀀스일수록 앞 시퀀스의 한계를 개선한다.

## 시퀀스(소단원) 구성

| 시퀀스 | 경로 | 위치 | 설명 |
|--------|------|------|------|
| 01. React State | `/react-state` | [01-react-state](src/chapters/01-react-state/) | 순수 `useState`/`useEffect` + fetch (캐싱·자동 리패칭 없음) |
| 02. Query Hook | `/query-hook` | [02-query-hook](src/chapters/02-query-hook/) | `useQuery`/`useMutation` 기본형 (onSuccess 캐시 갱신) |
| 03. Optimistic | `/optimistic` | [03-optimistic](src/chapters/03-optimistic/) | 낙관적 업데이트 (onMutate/onError/onSettled) |
| 04. Normalization | `/normalization` | [04-normalization](src/chapters/04-normalization/) | 캐시 정규화 (id 목록 + 개별 아이템 캐시) |

문서: [docs](src/chapters/docs/) (ABOUT / GUIDE + assets)

## 폴더 구조

```
src/
├─ main.tsx                  # <BrowserRouter> + <QueryClientProvider> + Devtools
├─ App.tsx                   # 시퀀스 네비게이션 + <Routes>
├─ api/                      # ★ 4시퀀스 공유 (fetch/create/update/delete)
├─ shared/
│   ├─ lib/{utils, constants}
│   ├─ types/todo-list
│   └─ components/ui/         # button, input
└─ chapters/
    ├─ 01-react-state/{pages, components}       # hooks 없음, api 직접 호출
    ├─ 02-query-hook/{hooks, pages, components}
    ├─ 03-optimistic/{hooks, pages, components}
    ├─ 04-normalization/{hooks, pages, components}
    └─ docs/                  # ABOUT / GUIDE + assets/
```

## 실행

```bash
npm install

# 1) json-server 백엔드 (포트 3000)
npm run server

# 2) 개발 서버 (별도 터미널)
npm run dev
```

> API 요청 대상은 `src/shared/lib/constants.ts` 의 `API_URL` (`http://localhost:3000`).
> 목 데이터는 `server/db.json`.

## 경로 alias

- `@/*` → `src/*`
- 공유 자원은 `@/shared/*`, API 는 `@/api/*`
