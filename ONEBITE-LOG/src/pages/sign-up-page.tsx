import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">회원가입</div>
      <div className="flex flex-col gap-2">
        <Input className="py-6" type="email" placeholder="example@abc.com" />
        <Input className="py-6" type="password" placeholder="password" />
      </div>
      <div>
        <Button className="w-full">회원가입</Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={"/sign-in"}>
          이미 계정이 있다면 로그인
        </Link>
      </div>
    </div>
  );
}
