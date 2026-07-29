# [_**Root/README.md**_](../../README.md)

# _**Shadcn 실전 컴포넌트 적용 1**_
## 목차
1. button
2. input
3. textarea
4. sonner
<br>
<br>

<details>
<summary>접기/펼치기</summary>
<br>


## 1) button
아래와 같이 명령을 통해 컴포넌트를 추가할수 있으나, shadcn 초기 세팅시 기본으로 추가된다.
```bash
npx shadcn@latest add button
```

앞서 [SETTING.md](SETTING.md)에서 세팅 과정 중 마지막 기본 예제에 이어 variant 속성에 대해 적용해본다.  

### variant 속성
button의 스타일 유형을 조정할 수 있는 속성이다.

```tsx
import { Button } from "@/components/ui/button";

function Shadcn() {
  return (
    <div className="p-5">
      {/* 생략 */}
      <Button variant={"destructive"}>버튼</Button>
      <Button variant={"ghost"}>버튼</Button>
      <Button variant={"link"}>버튼</Button>
      <Button variant={"outline"}>버튼</Button>
      <Button variant={"secondary"}>버튼</Button>
    </div>
  );
}

export default Shadcn;
```

![alt text](variant.gif)

<br>


## 2) input
아래 명령을 통해 컴포넌트를 추가한다.
```bash
npx shadcn@latest add input
```

onChange, value 등 일반적인 input 태그와 동일하게 속성을 설정할 수 있다.

```tsx
import { Input } from "@/components/ui/input";

function Shadcn() {
  return (
    <div className="p-5">
      {/* 생략 */}
      <Input placeholder="입력 ..." />
    </div>
  );
}

export default Shadcn;
```
<br>


## 3) textarea
아래 명령을 통해 컴포넌트를 추가한다.
```bash
npx shadcn@latest add textarea
```

```tsx
import { Textarea } from "@/components/ui/textarea";

function Shadcn() {
  return (
    <div className="p-5">
      {/* 생략 */}
      <Textarea />
    </div>
  );
}

export default Shadcn;
```
<br>

## 4) sonner
버튼을 클릭하는 등 이벤트가 발생했을때, 혹은 원하는 타이밍에 Toast 메시지를 발생시키는 컴포넌트이다.  

아래 명령을 통해 설치한다.  

```bash
npx shadcn@latest add sonner
```

Toast 메시지가 실제 렌더링이 될 Toaster 컴포넌트를 import하여 jsx에 배치시킨 후, sonner가 제공하는 toast 함수를 import 하여 메시지와 옵션을 전달하여 호출하면 된다.  

```tsx
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

function Shadcn() {
  return (
    <div className="p-5">
      {/* 생략 */}
      <Toaster />
      <Button
        onClick={() => {
          toast("버튼이 클릭되었습니다.");
        }}
      >
        sonner 버튼
      </Button>
    </div>
  );
}

export default Shadcn;
```

toast 옵션은 두번째 매개변수로 객체 형태로 전달한다.  

```tsx
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

function Shadcn() {
  return (
    <div className="p-5">
      {/* 생략 */}
      <Toaster />
      <Button
        onClick={() => {
          toast("버튼이 클릭되었습니다.", {
            position: "top-center",
          });
        }}
      >
        sonner 버튼
      </Button>
    </div>
  );
}

export default Shadcn;
```
<br>

</details>
<br>
<hr>
<br>
