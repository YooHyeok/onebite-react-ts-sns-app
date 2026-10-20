import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/shared/lib/constants";
import type { Todo } from "@/shared/types/todo-list";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(
        QUERY_KEYS.todo.list, (prevTodos) => {
          if (!prevTodos) return [];
          return prevTodos.filter((prevTodo) => prevTodo.id !== deletedTodo.id);
        }
      )
    },
    onError: () => {},
  })
}