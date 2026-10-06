import FallBack from "@/components/fallback";
import Loader from "@/components/loader";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useProfileData } from "@/hooks/queries/use-profile-data";
import { useSession } from "@/store/session";
import defaultAvatar from "@/assets/default-avatar.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProfileEdiotModal } from "@/store/profile-editor-modal";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useUpdateProfile } from "@/hooks/mutations/profile/use-update-profile";
import { generateErrorMessage } from "@/lib/error";
import { toast } from "sonner";

type Image = {
  file: File;
  previewUrl: string;
};

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

  const {
    mutate: updateProfile,
    isPending: isUpdateProfilePending,
    isError,
  } = useUpdateProfile({
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

  const [avatarImage, setAvatarImage] = useState<Image | null>(null);
  const [nickname, setNickname] = useState("");
  const [bio, setBio] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      if (avatarImage) URL.revokeObjectURL(avatarImage.previewUrl);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && profile) {
      setNickname(profile.nickname);
      setBio(profile.bio);
      setAvatarImage(null);
    }
  }, [profile, isOpen]);

  const handleUpdateClick = () => {
    if (nickname.trim() === "") return;
    updateProfile({
      userId: session!.user.id, // 세션 데이터는 반드시 존재할것이라고 !단언
      nickname,
      bio,
      avatarImageFile: avatarImage?.file,
    });
  };
  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (avatarImage) {
      URL.revokeObjectURL(avatarImage.previewUrl); // 새로운 이미지가 선택될 때 브라우저 메모리에 저장된 기존 이미지 제거
    }
    setAvatarImage({
      file,
      previewUrl: URL.createObjectURL(file),
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="flex flex-col gap-5">
        <DialogTitle>프로필 수정하기</DialogTitle>
        {fetchProfileError && <FallBack />}
        {isFetchProfilePending && <Loader />}
        {!fetchProfileError && !isFetchProfilePending && (
          <>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">프로필 이미지</div>
              <input
                disabled={isUpdateProfilePending}
                onChange={handleSelectImage}
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
              />
              <img
                onClick={() => {
                  if (fileInputRef.current) fileInputRef.current.click();
                }}
                className="h-20 w-20 cursor-pointer rounded-full object-cover"
                src={
                  avatarImage?.previewUrl || profile.avatar_url || defaultAvatar
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">닉네임</div>
              <Input
                disabled={isUpdateProfilePending}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground">소개</div>
              <Input
                disabled={isUpdateProfilePending}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <Button
              disabled={isUpdateProfilePending}
              onClick={handleUpdateClick}
              className="cursor-pointer"
            >
              수정하기
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
