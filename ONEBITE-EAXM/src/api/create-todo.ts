import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types/todo-list";

export async function createTodo(content: string) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({
      // id, // id는 json-server에 의해 자동으로 생성되므로 생략 가능.
      content,
      isDone: false
    })
  })
  if (!response.ok) throw new Error("Create Todo Failed");

  const data:Todo = await response.json()
  return data;
}