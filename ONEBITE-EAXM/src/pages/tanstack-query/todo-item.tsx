import { Button } from "@/components/ui/button";
import type { Todo } from "@/types/todo-list";

export default function TodoItem({ id, content }: Todo) {
  console.count(`TodoItem ${id}`);
  const handleDeleteClick = () => {
    console.log("[TanStack Query] 삭제 구현 예정");
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
