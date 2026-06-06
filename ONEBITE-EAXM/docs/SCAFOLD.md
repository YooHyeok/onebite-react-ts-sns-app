# [Root/README.md](../README.md)

# ***프로젝트 스케폴딩***
- [App.tsx](src/App.tsx) 내 import문 제거 및 jsx 내 div 태그 구성 수정
  ```tsx
  import './App.css'
  function App() {
    return <div>Hello World</div>
  }

  export default App
  ```
- [App.css](src/App.css)와 [index.css](src/index.css) 두 파일에 작성된 내용 제거
- [main.tsx](src/main.tsx) 내 StrictMode 태그 및 import 제거.  
  ```tsx
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.tsx'

  createRoot(document.getElementById('root')!).render(<App />)
  ```
  StrictMode : 리액트 앱의 잠재적 문제 검사 기능 수행.  
  검사 관점에서 이점이 있으나, 컴포넌트를 두번 랜더링 시키는 등 불편한 동작을 야기함.