import { useCount, useCountStore } from "@/chapters/01-basic/store";

export default function Viewer() {
  // const { count } = useCountStore();
  // const count = useCountStore(store => store.count);
  const count = useCount();

  return <div>{count}</div>;
}
