import { createTodo } from "@/api/create-todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types/todo-list";

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
    onSuccess: (newTodo: Todo) => {
      /**
       * [invalidateQueries] todos 이름을 갖는 Tanstack Query 캐시 데이터를 무효화 한다.
       * queryClient: 서버 상태와 관련된 모든 데이터를 보관하는 저장소로 cache 데이터와 state들이 모두 보관되는 객체
       */
      /* queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list
      }) */

      /**
       * 캐시 무효화 방식은 직관적이고 간단한 장점이 있지만,  
       * 백엔드 서버에 저장된 데이터가 많아지면 많아질수록 리패칭 해야되는 데이터의 양이 계속 증가되므로  
       * 서버에 부하가 발생할 수 있다.  
       * 만약 리패칭해야 되는데이터의 양이 많아질 것 같은 경우 무효화 방식보다는 기존 캐시 저장소의 데이터를 즉시 업데이트 한다.  
       * QueryClient 캐시 저장소와 json-server는 서로 독립적. json-server에 먼저 저장하고 캐시 저장소에도 갱신함으로써 바로 반영됨.
       */
      /* queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if(!prevTodos) return [newTodo]; // 이전 데이터가 유효하지 않다면 데이터가 없었던것이므로 신규 추가된 목록으로 적용
        return [...prevTodos, newTodo]
      }) */

      /* 캐시 정규화 버전 */
      queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(newTodo.id), newTodo)
      queryClient.setQueryData<string[]>(QUERY_KEYS.todo.list, (prevTodoIds) => {
        if(!prevTodoIds) return [newTodo.id];
        return [...prevTodoIds, newTodo.id]
      })
      
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}