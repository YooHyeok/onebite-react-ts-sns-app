import TodoEditor from "@/chapters/04-normalization/components/todo-editor";
import TodoItem from "@/chapters/04-normalization/pages/todo-item";
import { useTodosData } from "@/chapters/04-normalization/hooks/quries/use-todos.data";

export default function TodoListPage() {
  /* tanstack query 모듈화 */
  const { data: todoIds, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중 입니다 ...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todoIds?.map((id) => (
        // 캐시 정규화 버전
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
}
