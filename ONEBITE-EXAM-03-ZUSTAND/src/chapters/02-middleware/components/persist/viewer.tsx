import { useCount } from "@/chapters/02-middleware/store/persist";

export default function Viewer() {
  // const { count } = useCountStore();
  // const count = useCountStore(store => store.count);
  const count = useCount();

  return <div>{count}</div>;
}
