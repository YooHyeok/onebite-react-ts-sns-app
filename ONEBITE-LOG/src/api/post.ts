import { uploadImage } from "@/api/image";
import supabase from "@/lib/supabase";
import type { PostEntity } from "@/type";

export async function createPost(content: string) {
  const { data, error } = await supabase.from("post")
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
  const { data, error } = await supabase.from("post")
  .update(post)
  .eq("id", post.id)
  .select()
  .single()
  if (error) throw error;
  return data;
}

export async function deletePost(id: number) {
  const { data, error } = await supabase.from("post")
  .delete()
  .eq("id", id)
  .select()
  .single()

  if (error) throw error;
  return data;
}