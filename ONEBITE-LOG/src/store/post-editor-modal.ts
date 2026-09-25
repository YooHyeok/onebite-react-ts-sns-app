import { create } from "zustand"
import { combine, devtools } from "zustand/middleware"

type CreateMode = {
  isOpen: true;
  type: "CREATE"
}
type EditMode = {
  isOpen: true;
  type: "EDIT";
  content: string;
  postId: number;
  imageUrls: string[] | null;
}

type OpenState = CreateMode | EditMode

type CloseState = {
  isOpen: false;
}

type State = CloseState | OpenState

const initialState = {
  isOpen: false
} as State

const usePostEditorModalStore = create(
  devtools(
    combine(
      initialState,
      (set) => ({
        actions: {
          openCreate: () => {
            set({ isOpen: true, type: "CREATE" })
          },
          openEdit: (param: Omit<EditMode, "isOpen" | "type">) => {
            set({ isOpen: true, type: "EDIT", ...param })
          },
          close: () => {
            set({ isOpen: false })
          }
        }
      })
    ), {name: "postEditorModalStore"}
  )
)

/**
 * 모달 open 하는 open action 반환 훅
 * @returns 
 */
export const useOpenCreatePostModal = () => {
  const openCreate = usePostEditorModalStore((store) => store.actions.openCreate)
  return openCreate;
}
export const useOpenEditPostModal = () => {
  const openEdit = usePostEditorModalStore((store) => store.actions.openEdit)
  return openEdit;
}

/**
 * modal store의 action, state 반환 훅
 * @returns 
 */
export const usePostEditorModal = () => {
  const store = usePostEditorModalStore()
  return store as typeof store & State; // State 타입 결합
}