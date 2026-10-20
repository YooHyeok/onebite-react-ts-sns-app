function Typography() {
  return <div>
    <div className="text-5xl">C) Sizing</div>
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
    <hr />
    <br />
  </div>
}

export default Typography
