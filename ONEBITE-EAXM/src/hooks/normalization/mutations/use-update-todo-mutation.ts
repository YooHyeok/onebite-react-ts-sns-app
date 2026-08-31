import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types/todo-list";
import {  useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => { // onMutate: 비동기 요청이 시작되었을때 즉시 호출
      await queryClient.cancelQueries({queryKey: QUERY_KEYS.todo.detail(updatedTodo.id)})
      const prevTodo = queryClient.getQueryData<Todo>(
        QUERY_KEYS.todo.detail(updatedTodo.id)
      )
      queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(updatedTodo.id), (prevTodo) => {
        if (!prevTodo) return;
        return {...prevTodo, ...updateTodo}
      })
      return {prevTodo}
    },
    /* 예외상황 1. 오류 발생시 낙관적 업데이트 이전 값으로 초기화 */
    onError: (error, variable, context) => { // 1. 오류 객체 / 2. mutationFn 매핑 함수의 매개변수 / 3. onMutate 반환값
      if (context && context.prevTodo) {
        console.error("[onError] 요청 실패")
        alert("요청에 실패했습니다.")
        queryClient.setQueryData<Todo>(
          QUERY_KEYS.todo.detail(context.prevTodo.id), 
          context.prevTodo
        ) // setQueryData
      }
    }
  })
}