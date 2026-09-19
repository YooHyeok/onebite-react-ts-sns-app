import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCreatePost } from "@/hooks/mutations/post/use-create-post";
import { generateErrorMessage } from "@/lib/error";
import { usePostEditorModal } from "@/store/post-editor-modal";
import { ImageIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { toast } from "sonner";

type Image = {
  file: File;
  previewUrl: string;
};

export default function PostEditorModal() {
  const { isOpen, close } = usePostEditorModal();
  const [content, setContent] = useState("");
  const [images, setImages] = useState<Image[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCloseModal = () => {
    close();
  };

  const { mutate: createPost, isPending: isCreatePostPending } = useCreatePost({
    onSuccess: () => {
      close();
    },
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: "top-center",
      });
    },
  });

  const handleCreatePostClick = () => {
    if (content.trim() === "") return; // 입력값이 없으면 종료
    createPost(content);
  };

  const handleSelectImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      files.forEach((file) => {
        console.log(URL.createObjectURL(file));
        setImages((prev) => [
          ...prev,
          {
            file,
            previewUrl:
              URL.createObjectURL(file) /* 저장용이 아닌 미리보기용 임시 URL */,
          },
        ]);
      });
    }

    e.target.value = ""; // 동일한 이미지(입력값이 같게되면 이벤트 핸들러가 실행되지 않을수도 있음) 등, 자유로운 파일 선택을 위함.
  };

  const handleDeleteImage = (image: Image) => {
    setImages((prevImages) =>
      prevImages.filter((item) => item.previewUrl !== image.previewUrl),
    );
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  useEffect(() => {
    if (!isOpen) return;
    textareaRef.current?.focus();
    setContent("");
    setImages([]);
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="max-h-[90vh]">
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea
          disabled={isCreatePostPending}
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="max-h-125 min-h-25 focus:outline-none"
          placeholder="무슨 일이 있었나요?"
        />
        <Button
          disabled={isCreatePostPending}
          variant={"outline"}
          className="cursor-pointer"
        >
          <ImageIcon />
          이미지 추가
        </Button>
        <Button
          disabled={isCreatePostPending}
          onClick={handleCreatePostClick}
          className="cursor-pointer"
        >
          저장
        </Button>
      </DialogContent>
    </Dialog>
  );
}
