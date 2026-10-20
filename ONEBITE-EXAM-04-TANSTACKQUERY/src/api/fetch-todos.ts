import { API_URL } from "@/shared/lib/constants";
import type { Todo } from "@/shared/types/todo-list";

export async function fetchTodos() {
  const response = await fetch(`${API_URL}/todos`);
  if (!response.ok) throw new Error("Fetch Failed");

  const data: Todo[] = await response.json();
  return data;
}