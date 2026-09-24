import { uploadImage } from "@/api/image";
import supabase from "@/lib/supabase";
import type { PostEntity } from "@/type";

/**
 * supabase posts 전체 조회 fetch 함수
 * @returns 
 * @deprecated 최초 조회 방식으로 무한스크롤을 구현하게 되면서 더이상 사용하지 않음
 */
export async function fetchPosts() {
  const { data, error } = await supabase
  .from("post")
  .select("*, author: profile!author_id (*)") // profile의 PK(id) 값을 갖는 post의 FK(author_id) 값을 기준으로 Profile 테이블과 Join하여 author 이름의 property로 래핑
  .order("created_at", {ascending: false /* 내름차순 정렬 */})
  if (error) throw error;
  return data;
}
/**
 * supabase posts 범위 조회 fetch 함수
 * 페이징 처리시 사용하는 방식으로, 조회할 범위를 받아 raange함수를 통해 범위조회한다.
 * infinite, 무한스크롤 조회 기능을 구현하며 추가된 메소드.
 * @param param0 
 * @returns 
 */
export async function fetchPostsByRange({from, to}: {from:number; to:number;}) {
  const { data, error } = await supabase
  .from("post")
  .select("*, author: profile!author_id (*)") // profile의 PK(id) 값을 갖는 post의 FK(author_id) 값을 기준으로 Profile 테이블과 Join하여 author 이름의 property로 래핑
  .order("created_at", {ascending: false /* 내름차순 정렬 */})
  .range(from, to)
  if (error) throw error;
  return data;
}

export async function createPost(content: string) {
  const { data, error } = await supabase
  .from("post")
  .insert({
    content
  })
  .select()
  .single()
  if (error) throw error;
  return data;
}

export async function createPostWithImages({content, images, userId}: {content: string, images: File[], userId: string}) {
  
  // 1. 신규 포스트 생성
  const post = await createPost(content)
  if(images. length === 0) return post;

  try {
    
    // 2. 이미지 업로드 (Promise.all을 통한 병렬처리)
    const imageUrls = await Promise.all(
      images.map((image) => {
        const fileExtension = image.name.split(".").pop() || "webp"
        const filename = `${Date.now()}-${crypto.randomUUID()}.${fileExtension}`
        const filePath = `${userId}/${post.id}/${filename}`

        return uploadImage({
          file: image,
          filePath
        })
      })
    )

    // 3. post 테이블 업데이트
    const updatedPost = await updatePost({
      id: post.id,
      image_urls: imageUrls
    })
    return updatedPost;
  } catch (error) {
    await deletePost(post.id);
    throw error;
  }
  
}

/**
 * Partial을 활용하여 모든 프로퍼티를 선택적 프로퍼티로 변환
 * id 프로퍼티를 필수로 전달하도록 id 프로퍼티 Intersection(교집합) 처리
 * @param post 
 */
export async function updatePost(post: Partial<PostEntity> & {id: number}) {
  const { data, error } = await supabase
  .from("post")
  .update(post)
  .eq("id", post.id)
  .select()
  .single()
  if (error) throw error;
  return data;
}

export async function deletePost(id: number) {
  const { data, error } = await supabase
  .from("post")
  .delete()
  .eq("id", id)
  .select()
  .single()

  if (error) throw error;
  return data;
}