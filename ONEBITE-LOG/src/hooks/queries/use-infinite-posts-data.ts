import { fetchPostsByRange } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 5;

export function useInfinitePostsData() {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.post.list,
    queryFn: async ({pageParam}) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const posts = await fetchPostsByRange({from, to})
      return posts;
    },
    initialPageParam:0,
    getNextPageParam:(lastPage, allPages) => {
      // 새로운 페이지 데이터 불러올때, queryFn보다 먼저 호출되어 다음 페이지번호를 계산하기 위해 사용된다.
      // 사용자가 브라우저에서 스크롤을 최 하단까지 내려서 새로운 데이터 즉, 새로운 페이지를 불러와야 할 때 다음페이지의 번호가 몇번인지를 계산하기 위해 호출된다.
      // lastPage: 스크롤을 내렸을 때 새롭게 갱신될 페이지의 직전 페이지
      // allPages: 2차원 배열 형태로 페이지별 데이터
      if (lastPage.length < PAGE_SIZE) return undefined // 다음 페이지 없음 : 가장 최근 불러온 데이터의 갯수가 페이지 사이즈보다 작다면 마지막 페이지이므로
      return allPages.length; // 다음 페이지 번호
    }
  })
}