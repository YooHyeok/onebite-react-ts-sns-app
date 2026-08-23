import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/pages/zustand/todo-list/todo-item";
import { useTodos } from "@/store/todo-list/todos";

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
