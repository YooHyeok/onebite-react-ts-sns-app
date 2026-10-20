
# [***Root/README.md***](../../README.md)

# ***Tailwind css란?***
<details>
<summary>접기/펼치기</summary>
<br>

컴포넌트의 스타일링을 보다 편리하게 도와주는 도구.
스타일링을 보다 빠르고 간결하게 도와주는 도구.
자주 사용하는 css 규칙들을 약속된 이름에 별도의 클래스로 제공해주는 기능을 제공
웹에서 일반적으로 자주 사용하는 다양한 css 규칙들을

|             css            |        tailwind 정의                    |
|----------------------------|-----------------------------------------|
| `color: white;`            | `.text-white {color: white}`            |
| `font-weight: bold;`       | `.font-bold { font-weight: bold }`      |
| `background-color: black;` | `.bg-color { background-color: black }` |

text-white, font-bold, bg-black 등 다양한 클래스 이름들만을 활용해서 아래 코드와 같이
div 태그에 클래스 이름을 넣어주는 것만으로도 아주 간결하게 설정할 수 있다.  
```js
import "./App.css"
function App() {
  return <div className="text-white font-bold">Hello World</div>;
}
export default App;
```
결과적으로 해당 컴포넌트의 div는 text-white 클래스에 의해 폰트의 색상은 흰색, font-bold 클래스에 의해 두꺼운 글씨로 설정될것이다.  
이와같이 Tailwind css가 제공하는 클래스들을 이용하면 별도의 css파일을 추가로 생성할 필요도 없고 css 규칙을 직접 작성할 필요도 없기 때문에 굉장히 빠르고 편리하게 스타일링을 진행할 수 있다.  
참고로 Tailwind CSS가 제공하는 위와같은 클래스들을 특별히 유틸리티 클래스라고 표현한다.  

이런 유틸리티 클래스들에는 굉장히 많은 클래스들이 기본적으로 제공되고 있다.  
기본적으로 제공되는 유틸리티 클래스들만 잘 활용해도 거의 모든 케이스의 스타일링이 가능하다.  
프로젝트 개발에 주로 활용되는 소수의 핵심 클래스만 잘 익혀두고 나머지는 필요할때마다, 구글링 혹은 공식문서 or AI의 도움을 받아 진행할 수 있다.  
</details>
<br>

# [***TailwindCSS 설치 및 설정***](SETTING.md)