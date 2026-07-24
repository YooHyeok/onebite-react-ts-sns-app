import "./App.css";
import Tailwind from "./components/tailwind/Tailwind";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
const isActive = true;

function App() {
  return (
    <div>
      {/* <Tailwind /> */}
      {/* <Button>버튼!</Button> */}
      {/* <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div> */}
      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>
    </div>
  );
}

export default App;
