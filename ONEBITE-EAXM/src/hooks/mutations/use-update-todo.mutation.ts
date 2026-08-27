import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types/todo-list";
import {  useMutation, useQueryClient } from "@tanstack/react-query";


export default function useUpdateTodoMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateTodo,
    onMutate: (updatedTodo) => { // onMutate: 비동기 요청이 시작되었을때 즉시 호출
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return []; // 수정을 하려고 했는데 이전 배열이 유효하지 않으면 데이터가 없는것과 같음.
        return prevTodos.map(prevTodo => 
          prevTodo.id === updatedTodo.id 
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo
        )
      })
    }
  })
}