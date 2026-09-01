import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types/todo-list";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useUpdateTodoMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => { // onMutate: 비동기 요청이 시작되었을때 즉시 호출
      console.log("[onMutate] 낙관적 업데이트")
      /* 예외상황 2. 초기 요청에 대한 캐시 업데이트 이전에 캐시를 수정할경우, 초기 요청 완료시 수정된 캐시가 덮어씌워지게 되는 케이스 */
      await queryClient.cancelQueries({queryKey: QUERY_KEYS.todo.list})

      const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list);
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return []; // 수정을 하려고 했는데 이전 배열이 유효하지 않으면 데이터가 없는것과 같음.
        return prevTodos.map(prevTodo => 
          prevTodo.id === updatedTodo.id 
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo
        )
      })
      return { prevTodos } // 오류 발생시 onError의 3번째 매개변수로 전달된다.
    },
    /* 예외상황 1. 오류 발생시 낙관적 업데이트 이전 값으로 초기화 */
    onError: (error, variable, context) => { // 1. 오류 객체 / 2. mutationFn 매핑 함수의 매개변수 / 3. onMutate 반환값
      if (context && context.prevTodos) {
        console.error("[onError] 요청 실패")
        alert("요청에 실패했습니다.")
        queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, context.prevTodos) // setQueryData

      }
    },
    /* 예외상황 3. 백엔드 데이터와 무결성이 깨지는 경우 케시 데이터를 무효화하여 리패칭 */
    onSettled: () => { // 요청 종료시
      console.log("[onSettled] 데이터 무효화 리패칭을 통한 서버 싱크 동기화")
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list
      })
    }
  })
}