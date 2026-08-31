import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types/todo-list";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useTodosData () {

  const queryClient = useQueryClient();

  return useQuery ({
    // queryFn: fetchTodos,
    queryFn: async () => {
      const todos = await fetchTodos();

      /* 개별 아이템 캐시 보관(TanstackDevtools 목록에 출력됨) */
      todos.forEach((todo) => {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(todo.id), todo) 
      })

      return todos.map((todo) => todo.id)
    },
    queryKey: QUERY_KEYS.todo.list,
  })
}