import { useProfileData } from "@/hooks/queries/use-profile-data";
import defaultAvatar from "@/assets/default-avatar.png";
import { useSession } from "@/store/session";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Link } from "react-router";
import { signOut } from "@/api/auth";

export default function ProfileButton() {
  const session = useSession();
  const { data: profile } = useProfileData(session?.user.id);
  if (!session) return null;
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <img
            className="h-6 w-6 cursor-pointer rounded-full object-cover"
            src={profile?.avatar_url || defaultAvatar}
            alt="한입 로그의 로고, 메세지 말풍선을 형상화한 모양이다"
          />
        </PopoverTrigger>
        <PopoverContent className="flex w-40 flex-col p-0">
          <PopoverClose asChild>
            <Link to={`/profile/${session.user.id}`}>
              <div className="hover:bg-muted cursor-pointer px-4 py-3 text-sm">
                프로필
              </div>
            </Link>
          </PopoverClose>
          <PopoverClose asChild>
            <div
              onClick={signOut}
              className="hover:bg-muted cursor-pointer px-4 py-3 text-sm"
            >
              로그아웃
            </div>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}
