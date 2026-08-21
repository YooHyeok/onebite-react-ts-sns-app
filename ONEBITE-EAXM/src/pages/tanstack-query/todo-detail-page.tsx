import { useTodoDataById } from "@/hooks/quries/use-todo-data-by-ids";
import { useParams } from "react-router";

export default function TodoDetailPage() {
  const params = useParams();
  const id = params.id as unknown as number;

  const { data, isLoading, error } = useTodoDataById(id);

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중 입니다 ...</div>;
  return <div>{data?.content}</div>;
}
