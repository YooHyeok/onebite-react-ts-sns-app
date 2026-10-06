import FallBack from "@/components/fallback";
import Loader from "@/components/loader";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import { useSession } from "@/store/session";
import defaultAvatar from "@/assets/default-avatar.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProfileEdiotModal } from "@/store/profile-edit-modal";

export default function ProfileEditorModal() {
  const session = useSession();
  const {
    data: profile,
    error: fetchProfileError,
    isPending: isFetchProfilePending,
  } = useProfileData(session?.user.id);

  const store = useProfileEdiotModal();
  const {
    isOpen,
    actions: { close },
  } = store;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="flex flex-col gap-5">
        <DialogTitle>프로필 수정하기</DialogTitle>
        {fetchProfileError && <FallBack />}
        {isFetchProfilePending && <Loader />}
        {!fetchProfileError && !isFetchProfilePending && (
          <>
            <div className="flex-cor flex gap-2">
              <div className="text-muted-foreground">프로필 이미지</div>
              <img
                className="h-20 w-20 cursor-pointer rounded-full object-cover"
                src={profile.avatar_url || defaultAvatar}
              />
            </div>
            <div className="flex-cor flex gap-2">
              <div className="text-muted-foreground">닉네임</div>
              <Input />
            </div>
            <div className="flex-cor flex gap-2">
              <div className="text-muted-foreground">소개</div>
              <Input />
            </div>
            <Button className="cursor-pointer">수정하기</Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
