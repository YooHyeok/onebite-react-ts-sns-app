import { useCount, useCountStore } from "@/store/count";

export default function Viewer() {
  // const { count } = useCountStore();
  // const count = useCountStore(store => store.count);
  const count = useCount();

  return <div>{count}</div>;
}
