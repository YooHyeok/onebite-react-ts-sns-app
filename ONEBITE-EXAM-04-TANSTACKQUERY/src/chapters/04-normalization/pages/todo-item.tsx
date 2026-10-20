import { Button } from "@/shared/components/ui/button";
import { useDeleteTodoMutation } from "@/chapters/04-normalization/hooks/mutations/use-delete-todo-mutation";
import { useUpdateTodoMutation } from "@/chapters/04-normalization/hooks/mutations/use-update-todo-mutation";
import { useTodoDataById } from "@/chapters/04-normalization/hooks/quries/use-todo-data-by-ids";
import { Link } from "react-router";

export default function TodoItem({ id }: { id: string }) {
  const { data: todo } = useTodoDataById(id, "LIST"); // 캐시 정규화 적용

  if (!todo) throw new Error("Todo Data Undefined");
  const { content, isDone } = todo;

  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updateTodo } = useUpdateTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };
  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          disabled={isDeleteTodoPending}
          type={"checkbox"}
          checked={isDone}
          onClick={handleCheckboxClick}
        />
        <Link to={`/normalization/${id}`}>{content}</Link>
      </div>
      <Button
        disabled={isDeleteTodoPending}
        onClick={handleDeleteClick}
        variant={"destructive"}
      >
        삭제
      </Button>
    </div>
  );
}
