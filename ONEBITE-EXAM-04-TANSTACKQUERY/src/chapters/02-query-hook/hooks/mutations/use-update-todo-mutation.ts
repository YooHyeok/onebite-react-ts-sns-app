import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/shared/lib/constants";
import type { Todo } from "@/shared/types/todo-list";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * [02-query-hook] 기본 update mutation
 * 낙관적 업데이트(onMutate) 없이, 서버 요청이 성공한 뒤(onSuccess)에만
 * 리스트 캐시를 갱신하는 가장 기본적인 형태이다.
 * (낙관적 업데이트 버전은 03-optimistic 소단원에서 다룬다.)
 */
export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onSuccess: (updatedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.map((prevTodo) =>
          prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo,
        );
      });
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
