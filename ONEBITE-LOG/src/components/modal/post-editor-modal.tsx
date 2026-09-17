import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ImageIcon } from "lucide-react";

export default function PostEditorModal() {
  return (
    <Dialog>
      <DialogContent className="max-h-[90vh]">
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea
          className="max-h-125 min-h-25 focus:outline-none"
          placeholder="무슨 일이 있었나요?"
        />
        <Button variant={"outline"} className="cursor-pointer">
          <ImageIcon />
          이미지 추가
        </Button>
        <Button className="cursor-pointer">저장</Button>
      </DialogContent>
    </Dialog>
  );
}
