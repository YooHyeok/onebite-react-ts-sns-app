import { Button } from "@/shared/components/ui/button";
import { useCountAction } from "@/chapters/02-middleware/store/persist";

export default function Controller() {
  const { increase, decrease } = useCountAction();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
