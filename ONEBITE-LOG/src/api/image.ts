import { BUCKET_NAME } from "@/lib/constants";
import supabase from "@/lib/supabase";

export async function uploadImage({file, filePath}: {file: File; filePath: string;}) {
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file)
  if (error) throw error

  const { data: { publicUrl } } = supabase.storage
  .from(BUCKET_NAME)
  .getPublicUrl(data.path)

  return publicUrl
}

export async function deleteImagesInPath(path: string) {
  
  // 경로 기준 파일 조회
  const { data: files, error: fetchFilesError } = await supabase.storage
  .from(BUCKET_NAME)
  .list(path);

  if (fetchFilesError) throw fetchFilesError
  
  const { error: removeError } = await supabase.storage
  .from(BUCKET_NAME)
  .remove(files.map((file) => `${path}/${file.name}`)) // 삭제하려는 파일 풀 패스 목록 전달

  if (removeError) throw removeError
}