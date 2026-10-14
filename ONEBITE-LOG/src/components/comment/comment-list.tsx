import CommentItem from "@/components/comment/comment-item";
import FallBack from "@/components/fallback";
import Loader from "@/components/loader";
import { useCommentsData } from "@/hooks/queries/use-comments-data";
import type { Comment, NestedComment } from "@/type";

function toNestedComments(comments: Comment[]): NestedComment[] {
  const result: NestedComment[] = [];
  comments.forEach((comment) => {
    if (!comment.parent_coment_id) {
      result.push({ ...comment, children: [] });
    } else {
      const parentCommentIndex = result.findIndex(
        (item) => item.id === comment.parent_coment_id,
      );
      result[parentCommentIndex].children.push({
        ...comment,
        children: [],
        parentComment: result[parentCommentIndex],
      });
    }
  });
  return result;
}

export default function CommentList({ postId }: { postId: number }) {
  const {
    data: comments,
    isPending: isFetchCommentsPending,
    error: fetchCommentsError,
  } = useCommentsData(postId);

  if (fetchCommentsError) return <FallBack />;
  if (isFetchCommentsPending) return <Loader />;
  const nestedComments = toNestedComments(comments);
  return (
    <div className="flex flex-col gap-5">
      {nestedComments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
      {/* {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))} */}
    </div>
  );
}
