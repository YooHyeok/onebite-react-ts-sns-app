import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Todo } from "@/types/todo-list";


const initialState: {todos: Todo[]} = {
  todos: []
}

const useTodosStore = create(
  immer(
    combine(initialState, (set, get) => ({
      actions: {
        createTodo: (content: string) => {
          set(state => {
            const item = {
              id: new Date().getTime(),
              content: content
            }
            state.todos.push(item)/* 불변셩 관리 미들웨어인 immer 활용으로 push 메소드 사용 가능. */
          }) 
        },
        deleteTodo: (targetId: number) => {
          set(state => {
            state.todos = state.todos.filter((todo:Todo) => todo.id !== targetId)
          })
        },
      }
    }) )
  )
)

export const useTodos = () => {
  return useTodosStore(store => store.todos)
}
export const useCreateTodo = () => {
  return useTodosStore(store => store.actions.createTodo)
}
export const useDeleteTodo = () => {
  return useTodosStore(store => store.actions.deleteTodo)
}