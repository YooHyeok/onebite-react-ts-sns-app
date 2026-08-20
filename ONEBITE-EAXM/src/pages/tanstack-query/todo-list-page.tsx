// import { useEffect, useState } from "react";
import TodoEditor from "@/components/tanstack-query/todo-editor";
import TodoItem from "@/pages/tanstack-query/todo-item";
// import type { Todo } from "@/types/todo-list";
// import { API_URL } from "@/lib/constants";
// import { fetchTodos } from "@/api/fetch-todos";
// import { useQuery } from "@tanstack/react-query";
import { useTodosData } from "@/hooks/quries/use-todos.data";

export default function TodoListPage() {
  /* 순수 React 방식 */
  /* const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      setError(error as any);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); */

  /* tanstack query 방식 */
  /* const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    //  컴포넌트가 마운트되었을 때 useQuery 훅에 QueryFunction으로 설정한 fetchTodos 함수를 자동으로 호출
    queryFn: fetchTodos,
    queryKey: ["todos"],
    // retry: 0 // 요청 실패시 재 요청 시도 최대 횟수 (기본 3)
  }); */

  /* tanstack query 모듈화 */
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중 입니다 ...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
