# [***Root/README.md***](../../README.md)

# ***1) Typography***

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

# ***Template***

<details>
<summary>열기/닫기</summary>
<br>

</details>