import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types/todo-list";
import {  useMutation, useQueryClient } from "@tanstack/react-query";


export default function useUpdateTodoMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateTodo,
    onMutate: (updatedTodo) => { // onMutate: 비동기 요청이 시작되었을때 즉시 호출
      console.log("[onMutate] 낙관적 업데이트")
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
  })
}