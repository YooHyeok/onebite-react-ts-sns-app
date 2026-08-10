// import { useCount, useCountStore } from "@/store/count/basic";
import { useCount } from "@/store/count/middleware/combine";

export default function Viewer() {
  // const { count } = useCountStore();
  // const count = useCountStore(store => store.count);
  const count = useCount();

  return <div>{count}</div>;
}
