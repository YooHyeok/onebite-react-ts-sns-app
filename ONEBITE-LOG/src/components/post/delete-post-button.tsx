import { Button } from "@/components/ui/button";
import { useDeletePost } from "@/hooks/mutations/post/use-delete-post";
import { generateErrorMessage } from "@/lib/error";
import { useOpenAlertModal } from "@/store/alert-modal";
import { toast } from "sonner";

export default function DeletePostButton({ id }: { id: number }) {
  const { mutate: deletePost, isPending: isDeletePending } = useDeletePost({
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: "top-center",
      });
    },
  });
  const openAlertModal = useOpenAlertModal();
  const handleDeleteClick = () => {
    openAlertModal({
      title: "포스트 삭제",
      descrption: "삭제된 포스트는 되돌릴 수 없습니다. 정말 삭제하시겠습니까?",
      onPositive: () => {
        // 포스트 삭제 요청
        deletePost(id);
      },
    });
  };

  return (
    <Button
      disabled={isDeletePending}
      onClick={handleDeleteClick}
      className="cursor-pointer"
      variant={"ghost"}
    >
      삭제
    </Button>
  );
}
