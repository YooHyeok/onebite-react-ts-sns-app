import { create } from "zustand"
import { combine, devtools } from "zustand/middleware"

const initialState = {
  isOpen: false
}

const usePostEditorModalStore = create(
  devtools(
    combine(
      initialState,
      (set) => ({
        actions: {
          open: () => {
            set({ isOpen: true })
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
export const useOpenPostEditorModal = () => {
  const open = usePostEditorModalStore((store) => store.actions.open)
  return open;
}

/**
 * modal store의 action, state 반환 훅
 * @returns 
 */
export const usePostEditorModal = () => {
  const { isOpen, actions: {open, close} } = usePostEditorModalStore()
  return {
    isOpen,
    open,
    close
  };
}