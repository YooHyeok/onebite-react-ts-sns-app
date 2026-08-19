import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoEditor() {
  const [content, setContent] = useState("");
  const handleAddClick = () => {
    if (content.trim() === "") return;
    console.log(`[TanStack Query] 추가 구현 예정 - 값: ${content}`);
    setContent("");
  };
  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요 ..."
      />
      <Button onClick={handleAddClick}>추가</Button>
    </div>
  );
}
