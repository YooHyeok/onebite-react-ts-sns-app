function Typography() {
  return (
    <div>
      <div className="text-5xl">A) Typography</div>
      <br />
      <div>
        <div className="text-3xl">1. [size] font-size : text-크기</div>
        {/* 1. [size] font-size : text-크기 */}
        <div className="text-xs">text-xs</div>
        <div className="text-sm">text-sm</div>
        <div className="text-lg">text-lg</div>
        <div className="text-xl">text-xl</div>
        <div className="text-2xl">text-2xl</div>
        <div className="text-[13px]">text-[13px]</div>{" "}
        {/* 임의 값 (Arbitray Values) 설정 문법 */}
        <div className="text-3xl">
          2. [color] : text-색상-명도(밝기: 최대 900)
        </div>
        {/* 2. [color] : text-색상-명도(밝기: 최대 900) */}
        <div className="text-red-500">text-red-500</div>
        <div className="text-[rgb(100,30,200)]">
          text-[rgb(100,30,200)]
        </div>{" "}
        {/* 임의 값 (Arbitray Values) 설정 문법 : RGB*/}
        <div className="text-3xl">
          3. [weight] font-weight : font-굵기(thin~black: 100~900)
        </div>
        {/* 3. [weight] font-weight : font-굵기(thin~black: 100~900) */}
        <div className="font-thin">font-thin</div>
        <div className="font-medium">font-medium</div>
        <div className="font-black">font-black</div>
        <div className="font-[333]">font-[333]</div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Typography;
