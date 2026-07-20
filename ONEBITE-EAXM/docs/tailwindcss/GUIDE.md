# [_**Root/README.md**_](../../README.md)

# _**1) Typography**_

## 목차

**A) Text**

1. font-size
2. color
3. font-weight

**B) Background**

1. background-color

**C) Size**

1. width
2. height

**D) Spacing**

1. padding
2. margin

## A) Text

<details>
<summary>열기/닫기</summary>
<br>

### 1. font-size

Tailwind CSS에서 글자 크기는 `text-크기` 형태의 클래스로 지정한다.
`text-xs`, `text-sm`, `text-lg`, `text-xl`, `text-2xl`처럼 미리 정의된 크기 클래스를 사용할 수 있고, 필요한 값이 기본 스케일에 없으면 `text-[13px]`처럼 arbitrary value 문법으로 직접 값을 지정할 수 있다.

```tsx
<div className="text-xs">text-xs</div>
<div className="text-sm">text-sm</div>
<div className="text-lg">text-lg</div>
<div className="text-xl">text-xl</div>
<div className="text-2xl">text-2xl</div>
<div className="text-[13px]">text-[13px]</div>
```

### 2. color

글자 색상은 `text-색상-명도` 형태로 지정한다.
예를 들어 `text-red-500`은 red 색상 팔레트의 500 단계 색상을 적용한다.
Tailwind의 기본 색상 팔레트로 표현하기 어려운 색상은 `text-[rgb(100,30,200)]`처럼 arbitrary value 문법으로 직접 지정할 수 있다.

```tsx
<div className="text-red-500">text-red-500</div>
<div className="text-[rgb(100,30,200)]">text-[rgb(100,30,200)]</div>
```

### 3. font-weight

글자 굵기는 `font-굵기` 형태로 지정한다.
`font-thin`, `font-medium`, `font-black`처럼 의미가 정해진 클래스를 사용할 수 있고, 세밀한 숫자 굵기가 필요하면 `font-[333]`처럼 arbitrary value 문법으로 직접 지정할 수 있다.

```tsx
<div className="font-thin">font-thin</div>
<div className="font-medium">font-medium</div>
<div className="font-black">font-black</div>
<div className="font-[333]">font-[333]</div>
```

## B) Background

### 1. background-color

배경색은 `bg-색상-명도` 형태로 지정한다.
`bg-amber-500`은 amber 색상 팔레트의 500 단계 색상을 배경색으로 적용한다.

```tsx
<div className="bg-amber-500">bg-amber-500</div>
```

## C) Size

### 1. width

너비는 `w-값` 형태로 지정한다.
Tailwind의 기본 spacing 단위는 보통 `4px` 기준으로 계산되므로 `w-25`는 `25 * 4px`, 즉 `100px` 너비가 된다.
화면 전체 너비를 사용하려면 `w-full`을 사용하고, 기본 스케일에 없는 정확한 값이 필요하면 `w-[150.5px]`처럼 arbitrary value 문법을 사용할 수 있다.

```tsx
<div className="w-25 bg-blue-500">w-25(100px)</div>
<div className="w-[150.5px] bg-blue-500">w-[150.5px](value)</div>
<div className="w-full bg-blue-500">w-full(100%)</div>
```

### 2. height

높이는 `h-값` 형태로 지정한다.
너비와 마찬가지로 spacing 단위를 기준으로 계산되며, `h-15`는 `15 * 4px`, 즉 `60px` 높이를 의미한다.

```tsx
<div className="h-15 bg-red-500">h-15(60px)</div>
```

## D) Spacing

### 1. padding

padding은 요소의 내부 여백을 의미하며 `p-값` 형태로 지정한다.
전체 방향에 같은 padding을 주려면 `p-5`를 사용하고, 특정 방향만 지정하려면 `pt`, `pr`, `pb`, `pl`을 사용한다.
가로축과 세로축을 나누어 지정할 때는 `px`, `py`를 사용한다.

```tsx
<div className="h-60 w-60 bg-yellow-400 p-5">
  <div className="h-full w-full bg-blue-400">p-5</div>
</div>

<div className="h-60 w-60 bg-red-400 pt-5">
  <div className="h-full w-full bg-purple-400">pt-5(내부상단여백)</div>
</div>

<div className="h-60 w-60 bg-red-400 pr-5">
  <div className="h-full w-full bg-purple-400">pr-5(내부우측여백)</div>
</div>

<div className="h-60 w-60 bg-red-400 pl-5">
  <div className="h-full w-full bg-purple-400">pl-5(내부좌측여백)</div>
</div>

<div className="h-60 w-60 bg-red-400 pb-5">
  <div className="h-full w-full bg-purple-400">pb-5(내부하단여백)</div>
</div>

<div className="h-60 w-60 bg-gray-400 px-5 py-5">
  <div className="h-full w-full bg-purple-400">px-5/py-5(내부 x/y축 여백)</div>
</div>
```

### 2. margin

margin은 요소의 외부 여백을 의미하며 `m-값` 형태로 지정한다.
전체 방향에 같은 margin을 주려면 `m-5`를 사용하고, 특정 방향만 지정하려면 `mt`, `mr`, `mb`, `ml`을 사용한다.
가로축과 세로축을 나누어 지정할 때는 `mx`, `my`를 사용한다.

```tsx
<div className="m-5">
  <div className="h-60 w-60 bg-yellow-400 p-5">
    <div className="h-full w-full bg-blue-400">m-5 p-5</div>
  </div>
</div>

<div className="mt-5">
  <div className="h-60 w-60 bg-red-400 pt-5">
    <div className="h-full w-full bg-purple-400">
      mt-5(외부상단여백)
      <br />
      pt-5(내부상단여백)
    </div>
  </div>
</div>

<div className="mr-5">
  <div className="h-60 w-60 bg-red-400 pr-5">
    <div className="h-full w-full bg-purple-400">
      mr-5(외부우측여백)
      <br />
      pr-5(내부우측여백)
    </div>
  </div>
</div>

<div className="ml-5">
  <div className="h-60 w-60 bg-red-400 pl-5">
    <div className="h-full w-full bg-purple-400">
      ml-5(외부좌측여백)
      <br />
      pl-5(내부좌측여백)
    </div>
  </div>
</div>

<div className="mb-5">
  <div className="h-60 w-60 bg-red-400 pb-5">
    <div className="h-full w-full bg-purple-400">
      mb-5(외부하단여백)
      <br />
      pb-5(내부하단여백)
    </div>
  </div>
</div>

<div className="mx-5 my-5">
  <div className="h-60 w-60 bg-gray-400 px-5 py-5">
    <div className="h-full w-full bg-purple-400">
      mx-5/my-5(외부 x/y축 여백)
      <br />
      px-5/py-5(내부 x/y축 여백)
    </div>
  </div>
</div>
```

</details>
<br>

# _**2) Borders**_

## 목차

**A) Border**

1. border-width
2. border-color
3. border-radius

<details>
<summary>열기/닫기</summary>
<br>

## A) Border

### 1. border-width

Tailwind CSS에서 테두리는 `border` 클래스로 적용한다.
기본 `border`는 1px 테두리를 만들고, `border-2`처럼 숫자를 붙이면 테두리 두께를 지정할 수 있다.
특정 축이나 방향에만 테두리를 적용할 때는 `border-x`, `border-y`, `border-t`, `border-r`, `border-b`, `border-l`을 사용한다.

```tsx
<div className="border">border(1px)</div>
<div className="border-2">border-[2](px)</div>
```

```tsx
<div className="m-5 border-x">border-x(alias)</div>
<div className="m-5 border-y">border-y(alias)</div>
<div className="m-5 border-x-2 border-y-2">border-x|y-[2](px)</div>
```

```tsx
<div className="m-5 border-t">border-t(op)</div>
<div className="m-5 border-l">border-l(eft)</div>
<div className="m-5 border-r">border-r(ight)</div>
<div className="m-5 border-b">border-b(ottom)</div>
```

```tsx
<div className="m-5 border-t-2 border-r-2 border-b-2 border-l-2">
  border-t|r|b|l-[2](px)
</div>
```

### 2. border-color

테두리 색상은 `border-색상-명도` 형태로 지정한다.
예를 들어 `border-red-500`은 red 색상 팔레트의 500 단계 색상을 테두리에 적용한다.
테두리 색상은 먼저 테두리 두께가 있어야 화면에서 확인할 수 있다.

```tsx
<div className="border-x-2 border-y-2 border-red-500">border-red-500</div>
```

### 3. border-radius

모서리 둥글기는 `rounded-강도` 형태로 지정한다.
`rounded-md`는 medium 정도의 border-radius를 적용한다.
테두리가 있는 요소에 함께 사용하면 둥근 모서리 형태를 더 쉽게 확인할 수 있다.

```tsx
<div className="rounded-md border-x-2 border-y-2">rounded-md</div>
```

</details>
<br>

# _**3) FlexboxGrid**_

## 목차

**A) Flexbox**

1. flex container
2. justify-content
3. align-items
4. flex-direction
5. flex item

<details>
<summary>열기/닫기</summary>
<br>

## A) Flexbox

### 1. flex container

`flex` 클래스는 요소를 flex container로 만든다.
부모 요소에 `flex`를 적용하면 자식 요소들이 기본값으로 가로 방향(row)에 배치된다.

```tsx
<div className="flex">
  <div className="w-10 border">1</div>
  <div className="w-10 border">2</div>
  <div className="w-10 border">3</div>
  <div className="w-10 border">4</div>
</div>
```

### 2. justify-content

`justify-content`는 flex 컨테이너 내부 요소들의 배치, 기본적으로 수평 방향 배치를 결정한다.
`justify-*` 클래스는 flex container 안에서 자식 요소들의 주축 방향 배치를 결정한다.
기본 flex 방향이 row일 때 주축은 가로 방향이다.
`justify-between`, `justify-center`, `justify-evenly`처럼 배치 방식을 선택할 수 있다.

```tsx
<div className="flex justify-between">
  <div className="w-10 border">1</div>
  <div className="w-10 border">2</div>
  <div className="w-10 border">3</div>
  <div className="w-10 border">4</div>
</div>
```

```tsx
<div className="flex justify-center">
  <div className="w-10 border">1</div>
  <div className="w-10 border">2</div>
  <div className="w-10 border">3</div>
  <div className="w-10 border">4</div>
</div>
```

```tsx
<div className="flex justify-evenly">
  <div className="w-10 border">1</div>
  <div className="w-10 border">2</div>
  <div className="w-10 border">3</div>
  <div className="w-10 border">4</div>
</div>
```

### 3. align-items

`align-items`는 flex 컨테이너 내부 요소들의 배치, 기본적으로 수직 방향 배치를 결정한다.
`items-*` 클래스는 flex container 안에서 자식 요소들의 교차축 방향 배치를 결정한다.
기본 flex 방향이 row일 때 교차축은 세로 방향이다.
`items-center`는 자식 요소를 세로 가운데에 배치하고, `items-start`는 세로 시작 지점에 배치한다.

```tsx
<div className="flex items-center justify-evenly">
  <div className="h-10 w-10 border">1</div>
  <div className="h-20 w-10 border">2</div>
  <div className="h-30 w-10 border">3</div>
  <div className="h-40 w-10 border">4</div>
</div>
```

```tsx
<div className="flex items-start justify-evenly">
  <div className="h-10 w-10 border">1</div>
  <div className="h-20 w-10 border">2</div>
  <div className="h-30 w-10 border">3</div>
  <div className="h-40 w-10 border">4</div>
</div>
```

### 4. flex-direction

`flex-col`과 `flex-row`는 flex item이 쌓이는 방향을 결정한다.
`flex-col`은 세로 방향(column)으로 배치하고, `flex-row`는 가로 방향(row)으로 배치한다.

```tsx
<div className="flex flex-col items-start justify-evenly">
  <div className="h-10 w-10 border">1</div>
  <div className="h-20 w-10 border">2</div>
  <div className="h-30 w-10 border">3</div>
  <div className="h-40 w-10 border">4</div>
</div>
```

```tsx
<div className="flex flex-row items-start justify-evenly">
  <div className="h-10 w-10 border">1</div>
  <div className="h-20 w-10 border">2</div>
  <div className="h-30 w-10 border">3</div>
  <div className="h-40 w-10 border">4</div>
</div>
```

### 5. flex item

`flex-1`은 flex item이 가능한 남은 공간을 차지하도록 만든다.
같은 flex container 안에서 특정 자식 요소에 `flex-1`을 주면, 해당 요소가 다른 요소보다 더 넓은 공간을 확보한다.

```tsx
<div className="flex flex-row items-start justify-evenly">
  <div className="h-10 w-10 border">1</div>
  <div className="h-20 w-10 flex-1 border">2</div>
  <div className="h-30 w-10 border">3</div>
  <div className="h-40 w-10 border">4</div>
</div>
```

</details>
<br>

# _**Template**_

<details>
<summary>열기/닫기</summary>
<br>

</details>
