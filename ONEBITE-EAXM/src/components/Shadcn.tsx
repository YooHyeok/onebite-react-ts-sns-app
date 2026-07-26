import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Shadcn() {
  return (
    <div className="p-5">
      {/* <Button>버튼!</Button> */}
      {/* <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div> */}
      {/* <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
        </div> */}
      <Button variant={"destructive"}>버튼</Button>
      <Button variant={"ghost"}>버튼</Button>
      <Button variant={"link"}>버튼</Button>
      <Button variant={"outline"}>버튼</Button>
      <Button variant={"secondary"}>버튼</Button>
      <Input value={"기본값"} placeholder="입력 ..." />
      <Textarea />
    </div>
  );
}

export default Shadcn;
