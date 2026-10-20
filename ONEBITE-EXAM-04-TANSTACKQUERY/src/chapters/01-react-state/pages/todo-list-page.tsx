import { useEffect, useState } from "react";
import type { Todo } from "@/shared/types/todo-list";
import { fetchTodos } from "@/api/fetch-todos";
import TodoEditor from "@/chapters/01-react-state/components/todo-editor";
import TodoItem from "@/chapters/01-react-state/pages/todo-item";

/**
 * [01-react-state] 순수 React 방식
 * TanStack Query 를 도입하기 전, useState / useEffect 로 서버 상태를 직접 관리한다.
 * 로딩 / 에러 상태를 수동으로 관리해야 하며, 캐싱도 되지 않는다.
 * (이 한계를 02-query-hook 에서 TanStack Query 로 개선한다.)
 */
export default function TodoListPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중 입니다 ...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      {/* 순수 React 버전에서는 추가/삭제 후 목록을 직접 다시 불러온다. */}
      <TodoEditor onCreated={fetchData} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onChanged={fetchData} />
      ))}
    </div>
  );
}
