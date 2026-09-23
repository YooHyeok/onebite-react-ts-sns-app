import FallBack from "@/components/fallback";
import Loader from "@/components/loader";
import PostItem from "@/components/post/post-item";
import { usePostsData } from "@/hooks/queries/use-posts.data";

export function PostFeed() {
  const { data, error, isPending } = usePostsData();
  if (error) return <FallBack />;
  if (isPending) return <Loader />;
  return (
    <div className="flex flex-col gap-10">
      {data.map((post) => (
        <PostItem key={post.id} {...post} /> // 전개함으로써, 컴포넌트의 매개변수 props가 post객체 그 자체로 넘어감.
      ))}
    </div>
  );
}
