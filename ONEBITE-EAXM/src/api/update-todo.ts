import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types/todo-list";

/**
 * Partial: 제네릭에 지정한 타입의 모든 프로퍼티를 선택적 프로퍼티(?)로 바꿔주는 유틸리티 타입  
 *          여러가지 프로퍼티들 중 일부만 전달이 가능해짐.  
 * todo 아이템이 갖는 여러가지 프로퍼티들 중 딱 하나만 수정하는 경우가 있기 때문에 Partial 타입으로 래핑  
 * 
 * 이때 id 프로퍼티는 수정하려는 아이템을 식별해야 하므로 필수로 받을 수 있도록 Partial<?> 타입 뒤에 & 기호와 함께
 * Partial<?> & {id: string} 형태의 Intersection 타입 즉, 교집합 타입을 이용해서 id 프로퍼티만 필수적으로 string타입으로 전달받도록 설정한다.  
 * 
 * @param todo 
 */
export async function updateTodo(todo: Partial<Todo> & { id: string }): Promise<Todo> {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  })
  if (!response.ok) throw new Error("Update Todo Failed");
  const data: Todo = await response.json(); // 수정 완료된 Todo Item 반환
  return data;
}

updateTodo({id: "abc", isDone: false})
updateTodo({id: "def", content: "메롱"})
// updateTodo({content: "메롱"}) // 타입 오류 발생