import { Button } from "@/components/ui/button";
import useUpdateTodoMutation from "@/hooks/mutations/use-update-todo.mutation";
import type { Todo } from "@/types/todo-list";
import { Link } from "react-router";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate } = useUpdateTodoMutation();

  const handleDeleteClick = () => {
    console.log("[TanStack Query] 삭제 구현 예정");
  };

  const handleCheckboxClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };
  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          type={"checkbox"}
          checked={isDone}
          onClick={handleCheckboxClick}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button onClick={handleDeleteClick} variant={"destructive"}>
        삭제
      </Button>
    </div>
  );
}
