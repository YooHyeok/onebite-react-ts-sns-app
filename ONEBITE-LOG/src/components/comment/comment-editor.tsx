import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateComment } from "@/hooks/mutations/comment/useCreateComment";
import { generateErrorMessage } from "@/lib/error";
import { toast } from "sonner";

export default function CommentEditor({ postId }: { postId: number }) {
  const [content, setContent] = useState("");
  const { mutate: createComment, isPending: isCreateCommentPending } =
    useCreateComment({
      onSuccess: () => {},
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });
      },
    });
  const handleSubmitClick = () => {
    if (content.trim() === "") return;

    // 요청
    createComment({ postId, content });
  };
  return (
    <div className="flex flex-col gap-2">
      <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <div className="flex justify-end">
        <Button onClick={handleSubmitClick}>작성</Button>
      </div>
    </div>
  );
}
