function FlexboxGrid() {
  return (
    <div>
      <div className="text-5xl">F) Flex Container</div>
      <br />
      <div className="flex">
        <div className="w-10 border">1</div>
        <div className="w-10 border">2</div>
        <div className="w-10 border">3</div>
        <div className="w-10 border">4</div>
      </div>
      <br />
      <div className="text-3xl">
        2. [justify-content] flex 컨테이너 내부 요소들의 배치(기본 수평)를 결정
      </div>
      <br />
      <div className="text-xl">
        [justify-between] justify-content:space-between
      </div>
      <div className="flex justify-between">
        <div className="w-10 border">1</div>
        <div className="w-10 border">2</div>
        <div className="w-10 border">3</div>
        <div className="w-10 border">4</div>
      </div>
      <div className="text-xl">[justify-center] justify-content:center</div>
      <br />
      <div className="flex justify-center">
        <div className="w-10 border">1</div>
        <div className="w-10 border">2</div>
        <div className="w-10 border">3</div>
        <div className="w-10 border">4</div>
      </div>
      <div className="text-xl">
        [justify-evenly] justify-content:space-evenly
      </div>
      <br />
      <div className="flex justify-evenly">
        <div className="w-10 border">1</div>
        <div className="w-10 border">2</div>
        <div className="w-10 border">3</div>
        <div className="w-10 border">4</div>
      </div>
      <br />
      <div className="text-3xl">
        3. [align-items] flex 컨테이너 내부 요소들의 배치(기본 수직)를 결정
      </div>
      <br />
      <div className="text-xl">[items-center] align-items: center</div>
      <div className="flex items-center justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
      <br />
      <div className="text-xl">[items-start] align-items: flex-start</div>
      <div className="flex items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
      <br />
      <div className="text-3xl">
        3. [direction] 방향: flex-col(수직) / flex-row(수평)
      </div>
      <br />
      <div className="text-xl">[flex-col] 수직( flex-direction: column)</div>
      <div className="flex flex-col items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
      <br />
      <div className="text-xl">[flex-row] 수평 (flex-direction: row)</div>
      <div className="flex flex-row items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
      <br />
      <div className="text-xl">[flex-1] </div>
      {/* 자식 요소중 flex값이 1로 설정된 요소가 최대 너비로 늘어날 수 있을만큼 공간을 확보한다. */}
      <div className="flex flex-row items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </div>
  );
}
export default FlexboxGrid;
