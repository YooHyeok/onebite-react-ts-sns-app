function Typograph() {
  return <div>
    <div className="text-5xl">A) TEXT</div>
    <br />
    <div>
      <div className="text-3xl">1. [size] font-size : text-크기</div>
      {/* 1. [size] font-size : text-크기 */}
      <div className="text-xs">text-xs</div>
      <div className="text-sm">text-sm</div>
      <div className="text-lg">text-lg</div>
      <div className="text-xl">text-xl</div>
      <div className="text-2xl">text-2xl</div>
      <div className="text-[13px]">text-[13px]</div> {/* 임의 값 (Arbitray Values) 설정 문법 */}
      <div className="text-3xl">2. [color] : text-색상-명도(밝기: 최대 900)</div>
      {/* 2. [color] : text-색상-명도(밝기: 최대 900) */}
      <div className="text-red-500">text-red-500</div>
      <div className="text-[rgb(100,30,200)]">text-[rgb(100,30,200)]</div> {/* 임의 값 (Arbitray Values) 설정 문법 : RGB*/}

      <div className="text-3xl">3. [weight] font-weight : font-굵기(thin~black: 100~900)</div>
      {/* 3. [weight] font-weight : font-굵기(thin~black: 100~900) */}
      <div className="font-thin">font-thin</div>
      <div className="font-medium">font-medium</div>
      <div className="font-black">font-black</div>
      <div className="font-[333]">font-[333]</div>
    </div>
    <br />

    <div className="text-5xl">B) Background</div>
    <br />
    <div>
      {/* 1. [color] background-color : bg-색상-명도(밝기: 최대 900) */}
      <div className="bg-amber-500">bg-amber-500</div>
    </div>
    <br />

    <div className="text-5xl">C) Size</div>
    <br />
    <div>
      {/* 1. [width] 너비 : w-너비 → 너비=4의 배수 calc(spacing(간격단위 기본값 4px) * 너비)  ex) w-2 = 2*4px=8x */}
      <div className="text-3xl">1. [width] 너비 : w-너비 → 너비=4의 배수 calc(spacing(간격단위 기본값 4px) * 너비)  ex) w-2 = 2*4px=8x</div>
      <div className="w-25 bg-blue-500">w-25(100px)</div>
      <div className="w-[150.5px] bg-blue-500">w-[150.5px](value)</div>
      <div className="w-full bg-blue-500">w-full(100%)</div>
      {/* 2. [height] 높이: h-너비 */}
      <div className="text-3xl">2. [height] 높이: h-너비</div>
      <div className="h-15 bg-red-500">h-15(60px)</div>
    </div>
    <br />

    <div className="text-5xl">D) Spacing: 여백</div>
    <br />
    <div>
      {/* 1. [padding] 내부여백: p-여백 → 패딩=4의 배수 calc(spacing(간격단위 기본값 4px) * 여백) */}
      <div className="text-3xl">1. [padding] 내부여백: p-여백 → 패딩=4의 배수 calc(spacing(간격단위 기본값 4px) * 여백)</div>
      <div className="h-60 w-60 bg-yellow-400 p-5">
        <div className="h-full w-full bg-blue-400">p-5</div>
      </div>
      <div className="h-60 w-60 bg-red-400 pt-5"> {/* 내부 상단 여백: pt(op) */}
        <div className="h-full w-full bg-purple-400">pt-5(내부상단여백)</div>
      </div>
      <div className="h-60 w-60 bg-red-400 pr-5"> {/* 내부 우측 여백: pr(ight) */}
        <div className="h-full w-full bg-purple-400">pr-5(내부우측여백)</div>
      </div>
      <div className="h-60 w-60 bg-red-400 pl-5"> {/* 내부 좌측 여백: pl(eft) */}
        <div className="h-full w-full bg-purple-400">pl-5(내부좌측여백)</div>
      </div>
      <div className="h-60 w-60 bg-red-400 pb-5"> {/* 내부 상단 여백: pb(ottom) */}
        <div className="h-full w-full bg-purple-400">pb-6(내부하단여백)</div>
      </div>
      <div className="h-60 w-60 bg-gray-400 px-5 py-5"> {/* 내부 x/y축 여백: px/y */}
        <div className="h-full w-full bg-purple-400">px-6/py-6(내부 x/y축 여백)</div>
      </div>
      {/* 1. [padding] 내부여백: p-여백 → 패딩=4의 배수 calc(spacing(간격단위 기본값 4px) * 여백) */}
      <div className="m-5">
        <div className="h-60 w-60 bg-yellow-400 p-5">
          <div className="h-full w-full bg-blue-400">m-5 p-5</div>
        </div>
      </div>
      <div className="mt-5">
        <div className="h-60 w-60 bg-red-400 pt-5"> {/* 내부 상단 여백: pt(op) */}
          <div className="h-full w-full bg-purple-400">
            mt-5(외부상단여백) <br />
            pt-5(내부상단여백)
            </div>
        </div>
      </div>
      <div className="mr-5">
        <div className="h-60 w-60 bg-red-400 pr-5"> {/* 내부 우측 여백: pr(ight) */}
          <div className="h-full w-full bg-purple-400">
            mr-5(외부우측여백) <br/>
            pr-5(내부우측여백)
          </div>
        </div>
      </div>
      <div className="ml-5">
        <div className="h-60 w-60 bg-red-400 pl-5"> {/* 내부 좌측 여백: pl(eft) */}
          <div className="h-full w-full bg-purple-400">
            ml-5(외부좌측여백) <br />
            pl-5(내부좌측여백)
            </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="h-60 w-60 bg-red-400 pb-5"> {/* 내부 상단 여백: pb(ottom) */}
          <div className="h-full w-full bg-purple-400">
            mb-6(외부하단여백) <br />
            pb-6(내부하단여백)
            </div>
        </div>
      </div>
      <div className="mx-5 my-5">
        <div className="h-60 w-60 bg-gray-400 px-5 py-5"> {/* 내부 x/y축 여백: px/y */}
          <div className="h-full w-full bg-purple-400">
            mx-6/my-6(외부 x/y축 여백) <br />
            px-6/py-6(내부 x/y축 여백) <br />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Typograph
