import { Button } from "@/components/ui/button";
import { useOpenPostEditorModal } from "@/store/post-editor-modal";

export default function EditPostItemButton() {
  const openPostEditorModal = useOpenPostEditorModal();

  const handleButtonClick = () => {
    openPostEditorModal();
  };

  return (
    <Button
      onClick={handleButtonClick}
      className="cursor-pointer"
      variant={"ghost"}
    >
      수정
    </Button>
  );
}
