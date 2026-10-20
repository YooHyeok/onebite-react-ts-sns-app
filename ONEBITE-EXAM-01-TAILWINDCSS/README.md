# ONEBITE-EXAM-01-TAILWINDCSS

한입 리액트 강의 **1단원: TailwindCSS & Shadcn** 예제 프로젝트.

> 이 단원은 아직 **React Router를 도입하지 않는다.**
> 따라서 소단원 전환은 URL이 아니라 `src/App.tsx` 의 **import 주석 토글**로 한다. (코드 누적 방식)

## 소단원 구성

| 소단원 | 위치 | 문서 |
|--------|------|------|
| 01. TailwindCSS | [src/chapters/01-tailwindcss/](src/chapters/01-tailwindcss/) | [docs](src/chapters/01-tailwindcss/docs/) |
| 02. Shadcn | [src/chapters/02-shadcn/](src/chapters/02-shadcn/) | [docs](src/chapters/02-shadcn/docs/) |

## 폴더 구조

```
src/
├─ main.tsx                  # 라우터 없이 <App/> 만 렌더
├─ App.tsx                   # 소단원 import 주석 토글
├─ index.css / App.css
├─ shared/                   # 소단원 공유 자원
│   ├─ lib/utils.ts          # cn (shadcn)
│   └─ components/ui/         # shadcn UI 컴포넌트
└─ chapters/
    ├─ 01-tailwindcss/
    │   ├─ components/        # Tailwind, Typography, Background, Sizing, Spacing, Borders, FlexboxGrid
    │   └─ docs/              # ABOUT / GUIDE / SETTING + assets/
    └─ 02-shadcn/
        ├─ components/Shadcn.tsx
        └─ docs/              # ABOUT / GUIDE / SETTING + assets/
```

## 실행

```bash
npm install
npm run dev
```

전환하려면 `src/App.tsx` 에서 보고 싶은 소단원의 import / 렌더링 주석을 해제한다.

## 경로 alias

- `@/*` → `src/*`
- 공유 자원은 `@/shared/*` (예: `@/shared/lib/utils`, `@/shared/components/ui/button`)
