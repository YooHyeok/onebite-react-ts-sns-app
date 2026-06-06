# [Root/README.md](../README.md)
# Vite React Typescript 프로젝트 설정 가이드

## ESLint 설정
`no-unused-vars` 옵션과 `no-explicit-any` 옵션을 off로 설정한다.  
### [eslint.config.js](eslint.config.js)
```js
/* 생략 */

export default tseslint.config(
  /* 생략 */
  {
    /* 생략 */
    rules: {
      /* 생략 */
      "@typescript-eslint/no-unused-vars":"off",
      "@typescript-eslint/no-explicit-any":"off"
    },
  },
)
```
- `no-unused-vars` : 선언만 하고 사용되지 않는 변수가 있을 때 에러로 표기되는 옵션
- `no-explicit-any` : 명시적으로 특정 변수의 `any` 타입을 정의할 수 없도록 막아주는 옵션

## TypeScript 설정
[tsconfig.app.json](tsconfig.app.json) 파일과 [tsconfig.node.json](tsconfig.node.json) 파일에서
`compilerOptions` 속성의 `noUnusedLocals` 옵션과 `noUnusedParameters` 을 주석처리로 삭제한다.  
- `noUnusedLocals` : 사용하지 않는 지역변수가 있을 경우 오류로 처리하도록 하는 옵션 (eslint.config.js에서 `no-unsued-var` 옵션과 동일)
- `noUnusedParameters` : 사용되지 않는 매개변수가 있을 때 오류로 처리하는 옵션

```json
{
  "compilerOptions": {
    /* 생략 */
    
    /* Linting */
    /* 생략 */
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    /* 생략 */
  },
  /* 생략 */
}
```
