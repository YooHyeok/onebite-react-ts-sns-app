function Borders() {
  return (
    <div>
      <div className="text-5xl">E) Borders</div>
      <br />
      <div>
        <div className="text-3xl">1. 테두리(기본값 1px)</div>
        <div className="border">border(1px)</div>
        <br />
        <div className="border-2">border-[2](px)</div>
        <br />
        {/* X축(좌우) 테두리 생성 */}
        <div className="m-5 border-x">border-x(alias)</div>
        {/* y축(상하) 테두리 생성 */}
        <div className="m-5 border-y">border-y(alias)</div>
        {/* x|y 테두리 두께 임의 지정 */}
        <div className="m-5 border-x-2 border-y-2">border-x|y-[2](px)</div>
        {/* t상|b하|l좌|r우 테두리 생성 */}
        <div className="m-5 border-t">border-t(op)</div>
        <div className="m-5 border-l">border-l(eft)</div>
        <div className="m-5 border-r">border-r(ight)</div>
        <div className="m-5 border-b">border-b(ottom)</div>
        {/* t상|b하|l좌|r우 테두리 두깨 임의 지정 */}
        <div className="m-5 border-t-2 border-r-2 border-b-2 border-l-2">
          border-t|r|b|l-[2](px)
        </div>
        <br />
        <div className="text-3xl">
          3. [color] border-색상-명도(밝기: 최대 900)
        </div>
        <div className="border-x-2 border-y-2 border-red-500">
          border-red-500
        </div>
        <br />
        <div className="text-3xl">2. [radius] rounded-강도</div>
        <div className="rounded-md border-x-2 border-y-2">rounded-md</div>
        <br />
      </div>
      <br />
    </div>
  );
}
export default Borders;
