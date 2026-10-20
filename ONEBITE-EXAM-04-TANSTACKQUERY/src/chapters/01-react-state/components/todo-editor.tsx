import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { createTodo } from "@/api/create-todo";

/**
 * [01-react-state] 순수 React 방식의 TodoEditor
 * 생성 API 를 직접 호출하고, 완료 후 부모가 전달한 onCreated 로 목록을 다시 불러오게 한다.
 */
export default function TodoEditor({ onCreated }: { onCreated: () => void }) {
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleAddClick = async () => {
    if (content.trim() === "") return;
    setIsPending(true);
    try {
      await createTodo(content);
      setContent("");
      onCreated();
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요 ..."
      />
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </div>
  );
}
