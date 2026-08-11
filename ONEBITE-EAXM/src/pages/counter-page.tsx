/* import Controller from "@/components/zustand/counter/basic/controller";
import Viewer from "@/components/zustand/counter/basic/viewer"; */
/* import Controller from "@/components/zustand/counter/middleware/combine/controller";
import Viewer from "@/components/zustand/counter/middleware/combine/viewer"; */
import Controller from "@/components/zustand/counter/middleware/immer/controller";
import Viewer from "@/components/zustand/counter/middleware/immer/viewer";

export default function CounterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <Viewer />
      <Controller />
    </div>
  );
}
