import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo";

export default function TodoEditor() {
  /**
   * useMutation:
   *              useQuery와는 다르게 컴포넌트가 마운트 되자마자 비동기 함수를 호출하지 않는다.
   * mutate: 해당 함수 호출을 통해 mutationFn에 설정된 함수를 비동기 요청으로 실행하는 역할
   *         mutate 호출로 수동으로 요청하는 이유는 useMutation이라는 훅으로 createTodo의 상태까지 관리하기 위함.
   * isPending: mutate 호출을 톹한 비동기 요청의 로딩 상태
   *
   */
  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    /* 이벤트 핸들러 */
    onMutate: /*요청 발송 시점*/ () => {},
    onSettled: /*요청 종료 시점*/ () => {},
    onSuccess: () => {
      window.location.reload();
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });

  const [content, setContent] = useState("");
  const handleAddClick = () => {
    if (content.trim() === "") return;
    mutate(content);
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
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </div>
  );
}
