import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  useCreatePost,
  useCreatePostWithImages,
} from "@/hooks/mutations/post/use-create-post";
import { generateErrorMessage } from "@/lib/error";
import { useOpenAlertModal } from "@/store/alert-modal";
import { usePostEditorModal } from "@/store/post-editor-modal";
import { useSession } from "@/store/session";
import { ImageIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { toast } from "sonner";

type Image = {
  file: File;
  previewUrl: string;
};

export default function PostEditorModal() {
  const session = useSession();
  const { isOpen, close } = usePostEditorModal();
  const openAlertModal = useOpenAlertModal();

  const [content, setContent] = useState("");
  const [images, setImages] = useState<Image[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  useEffect(() => {
    if (!isOpen) {
      images.forEach((image) => {
        URL.revokeObjectURL(image.previewUrl); // chrome://blob-internals/
      });
      return;
    }
    textareaRef.current?.focus();
    setContent("");
    setImages([]);
  }, [isOpen]);

  const handleCloseModal = () => {
    if (content !== "" || images.length !== 0) {
      openAlertModal({
        title: "게시글 작성이 마무리 되지 않았습니다.",
        descrption: "이 화면에서 나가면 작성중이던 내용이 사라집니다.",
        onPositive: () => {
          close();
        },
        onNegative: () => {},
      });
      return;
    }
    close();
  };

  /* const { mutate: createPost, isPending: isCreatePostPending } = useCreatePost({
    onSuccess: () => {
      close();
    },
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: "top-center",
      });
    },
  }); */

  const { mutate: createPostWithImages, isPending: isCreatePostPending } =
    useCreatePostWithImages({
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
    // createPost(content);
    createPostWithImages({
      content,
      images: images.map((image) => image.file),
      userId: session!.user.id, // !단언으로 반드시 있을것이라 단언
    });
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
    URL.revokeObjectURL(image.previewUrl); // chrome://blob-internals/
  };

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
        <input
          onChange={handleSelectImages}
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
        />
        {images.length > 0 && (
          <Carousel>
            <CarouselContent>
              {images.map((image, idx) => (
                <CarouselItem className="basis-2/5" key={image.previewUrl}>
                  <div className="relative">
                    <img
                      src={image.previewUrl}
                      alt={`미리보기 이미지 ${idx + 1}`}
                      className="h-full w-full rounded-sm object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(image)}
                      className="absolute top-0 right-0 m-1 rounded-full bg-black/30 p-1"
                      aria-label={`이미지 ${idx + 1} 삭제`}
                    >
                      <XIcon className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
        <Button
          onClick={() => fileInputRef.current?.click()}
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
