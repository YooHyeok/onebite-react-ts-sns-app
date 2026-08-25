import { createTodo } from "@/api/create-todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";

/**
 * [useMutation]: 서버 상태 즉, 캐싱된 데이터를 생성,수정,삭제하는 등의 변경(Mutation) 작업을 처리할 때 사용하는 훅  
 *                useQuery와는 다르게 컴포넌트가 마운트 되자마자 비동기 함수를 호출하지 않는다.  
 * [mutate]: 해당 함수 호출을 통해 mutationFn에 설정된 함수를 비동기 요청으로 실행하는 역할
 *           mutate 호출로 수동으로 요청하는 이유는 useMutation이라는 훅으로 createTodo의 상태까지 관리하기 위함.  
 * [isPending]: mutate 호출을 톹한 비동기 요청의 로딩 상태  
 *
 */
export function useCreateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    /* 이벤트 핸들러 */
    onMutate: /*요청 발송 시점*/ () => {},
    onSettled: /*요청 종료 시점*/ () => {},
    onSuccess: () => {
      /**
       * [invalidateQueries] todos 이름을 갖는 Tanstack Query 캐시 데이터를 무효화 한다.
       * queryClient: 서버 상태와 관련된 모든 데이터를 보관하는 저장소로 cache 데이터와 state들이 모두 보관되는 객체
       */
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list
      })
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}