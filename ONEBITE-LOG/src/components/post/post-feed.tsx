import FallBack from "@/components/fallback";
import Loader from "@/components/loader";
import PostItem from "@/components/post/post-item";
import {
  useInfinitePostsData, // 스크롤 하단 감지를 위한 라이브러리 npm install react-intersection-observer
} from "@/hooks/queries/use-infinite-posts-data";
// import { usePostsData } from "@/hooks/queries/use-posts.data";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

export function PostFeed() {
  // const { data, error, isPending } = usePostsData();
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfinitePostsData();
  const { ref, inView } = useInView(); // ref를 지정한 특정 돔 요소를 감지하면 inView가 true로 변경됨. (스크롤등을 통해 요소가 브라우저에서 사라지면 false가 됨)

  useEffect(() => {
    console.log("inView = ", inView);
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  if (error) return <FallBack />;
  if (isPending) return <Loader />;
  return (
    <div className="flex flex-col gap-10">
      {data.pages.map((page) =>
        page.map((post) => <PostItem key={post.id} {...post} />),
      )}
      {isFetchingNextPage && <Loader />}
      {/* {data.map((post) => (
        <PostItem key={post.id} {...post} /> // 전개함으로써, 컴포넌트의 매개변수 props가 post객체 그 자체로 넘어감.
      ))} */}
      <div ref={ref}></div>{" "}
      {/* 최 하단에 div를 심어두고 해당 div를 감지하여 스크롤이 최 하단으로 갔는지를 감지. */}
    </div>
  );
}
