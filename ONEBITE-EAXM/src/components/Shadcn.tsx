import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
      <Input placeholder="입력 ..." />
      <Textarea />
      <Toaster />
      <Button
        onClick={() => {
          toast("버튼이 클릭되었습니다.", {
            position: "top-center",
          });
        }}
      >
        sonner 버튼
      </Button>
      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>{" "}
          {/* basis-1/3 클래스를 통해 한 줄에 여러 아이템을 보이도록 설정 : 현재 너비의 3분의 1만큼 차지 */}
          {/* 실제 flex-basis: calc(1/3 * 100%) = 33.3333% 로 적용됨. */}
          {/* flex-basis: flex 아이템의 크기를 설정하는 옵션 */}
          <CarouselItem className="basis-1/3">2</CarouselItem>{" "}
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem className="basis-1/3">5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverTrigger asChild>
          {/* asChild: PopoverTrigger 컴포넌트가 자체적으로 새로운 버튼을 생성하지 않고 자식 요소로 전달된 컴포넌트를 그대로 트리거 역할로 사용하게 해주는 설정. 
          생략할 경우 PopoverTrigger 버튼이 렌더링 되고 자식 요소로 구성한 태그는 아무런 동작을 하지 않는 상태로 생성된다. */}
          {/* <Button>asChild</Button> */}
          <div>asChild</div>
        </PopoverTrigger>
        <PopoverContent>Content!</PopoverContent>
      </Popover>
    </div>
  );
}

export default Shadcn;
