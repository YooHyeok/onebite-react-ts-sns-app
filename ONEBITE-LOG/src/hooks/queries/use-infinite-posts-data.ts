import { fetchPostsBetween, fetchPostsWithAuthorAndLikeBetween } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import { useSession } from "@/store/session";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

const PAGE_SIZE = 5;

export function useInfinitePostsData(authorId?: string) {

  const queryClient = useQueryClient()
  const session = useSession()

  return useInfiniteQuery({
    queryKey: !authorId ?  QUERY_KEYS.post.list : QUERY_KEYS.post.userList(authorId),
    queryFn: async ({pageParam}) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      // const posts = await fetchPostsBetween({from, to})
      const posts = await fetchPostsWithAuthorAndLikeBetween({from, to, userId: session!.user.id, authorId})
      // return posts;
      posts.forEach((post) => {
        queryClient.setQueryData(QUERY_KEYS.post.byId(post.id), post)
      })
      return posts.map((post) => post.id); // 중복 제거
    },
    initialPageParam:0,
    getNextPageParam:(lastPage, allPages) => {
      // 새로운 페이지 데이터 불러올때, queryFn보다 먼저 호출되어 다음 페이지번호를 계산하기 위해 사용된다.
      // 사용자가 브라우저에서 스크롤을 최 하단까지 내려서 새로운 데이터 즉, 새로운 페이지를 불러와야 할 때 다음페이지의 번호가 몇번인지를 계산하기 위해 호출된다.
      // lastPage: 스크롤을 내렸을 때 새롭게 갱신될 페이지의 직전 페이지
      // allPages: 2차원 배열 형태로 페이지별 데이터
      if (lastPage.length < PAGE_SIZE) return undefined // 다음 페이지 없음 : 가장 최근 불러온 데이터의 갯수가 페이지 사이즈보다 작다면 마지막 페이지이므로
      return allPages.length; // 다음 페이지 번호
    },
    // 아래는 staleTime, gcTime을 설정하지 않았을 경우 기본적으로 설정되는 옵션.
    // staleTime: 0, // 데이터가 상한 상태: 0 = 데이터를 조회하자마자 적용됨.
    // gcTime: 5 * 60 * 1000, // 5분: 브라우저 화면상에 캐시 데이터를 사용하는 컴포넌트가 단 하나도 존재하지 않을 때 전환되는 상태인 Inactive 상태에서 삭제가 되기 까지의 주기
    // refetchOnWindowFocus: true
    // 컴포넌트가 다시 마운트 된다거나, 인터넷 연결이 끊겼다가 복구되는 등의 리패칭이 발생 → 모든 데이터 조회.
    // 무한스크롤로 엄청 많은 데이터를 조회해놨다고 하면 성능이슈가 발생.
    staleTime: Infinity // 어떠한 상황에도 stale상태로 전환 되지 않게 됨.
  })
}