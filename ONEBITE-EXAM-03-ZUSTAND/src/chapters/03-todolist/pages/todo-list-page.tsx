import TodoEditor from "@/chapters/03-todolist/components/todo-editor";
import TodoItem from "@/chapters/03-todolist/pages/todo-item";
import { useTodos } from "@/chapters/03-todolist/store/todos";

/* const dummyTodos = [
  {
    id: 1,
    content: "Todo 1",
  },
  {
    id: 2,
    content: "Todo 2",
  },
  {
    id: 3,
    content: "Todo 3",
  },
]; */

export default function TodoListPage() {
  const todos = useTodos();
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {/* {dummyTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))} */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
