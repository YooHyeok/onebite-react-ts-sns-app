import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <Input className="py-6" type="email" placeholder="example@abc.com" />
        <Input className="py-6" type="password" placeholder="password" />
      </div>
      <div>
        <Button className="w-full">로그인</Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>
          계정이 없으시다면? 회원가입
        </Link>
      </div>
    </div>
  );
}
