import { Button } from "@/components/ui/button";
import type { Todo } from "@/types/todo-list";
import { useDeleteTodo } from "@/store/todo-list/todos";

export default function TodoItem({ id, content }: Todo) {
  const deleteTodo = useDeleteTodo();
  console.count(`TodoItem ${id}`);
  const handleDeleteClick = () => {
    deleteTodo(id);
  };
  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button onClick={handleDeleteClick} variant={"destructive"}>
        삭제
      </Button>
    </div>
  );
}
