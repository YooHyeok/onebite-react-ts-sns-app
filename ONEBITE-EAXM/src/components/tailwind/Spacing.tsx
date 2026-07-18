function Typography() {
  return <div>
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
    <br />
    <hr />
    <br />
  </div>
}

export default Typography
