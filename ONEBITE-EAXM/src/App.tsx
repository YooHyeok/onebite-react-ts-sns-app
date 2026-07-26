import "./App.css";
import Tailwind from "./components/tailwind/Tailwind";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./components/ui/textarea";

const isActive = true;

function App() {
  return (
    <div>
      {/* <Tailwind /> */}
      {/* <Button>버튼!</Button> */}
      {/* <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div> */}
      {/* <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
        </div> */}
      <div className="p-5">
        <Button variant={"destructive"}>버튼</Button>
        <Button variant={"ghost"}>버튼</Button>
        <Button variant={"link"}>버튼</Button>
        <Button variant={"outline"}>버튼</Button>
        <Button variant={"secondary"}>버튼</Button>
        <Input value={"기본값"} placeholder="입력 ..." />
        <Textarea />
      </div>
    </div>
  );
}

export default App;
