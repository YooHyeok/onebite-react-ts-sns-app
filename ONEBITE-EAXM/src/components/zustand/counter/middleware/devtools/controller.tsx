import { Button } from "@/components/ui/button";
import { useCountAction } from "@/store/count/middleware/devtools";

export default function Controller() {
  const { increase, decrease } = useCountAction();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
