import { Button } from "@/shared/components/ui/button";
import type { Todo } from "@/shared/types/todo-list";
import { updateTodo } from "@/api/update-todo";
import { deleteTodo } from "@/api/delete-todo";

/**
 * [01-react-state] 순수 React 방식의 TodoItem
 * 수정/삭제 API 를 직접 호출하고, 완료 후 onChanged 로 목록을 다시 불러오게 한다.
 */
export default function TodoItem({
  todo,
  onChanged,
}: {
  todo: Todo;
  onChanged: () => void;
}) {
  const { id, content, isDone } = todo;

  const handleCheckboxClick = async () => {
    await updateTodo({ id, isDone: !isDone });
    onChanged();
  };

  const handleDeleteClick = async () => {
    await deleteTodo(id);
    onChanged();
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input type="checkbox" checked={isDone} onChange={handleCheckboxClick} />
        {content}
      </div>
      <Button onClick={handleDeleteClick} variant={"destructive"}>
        삭제
      </Button>
    </div>
  );
}
