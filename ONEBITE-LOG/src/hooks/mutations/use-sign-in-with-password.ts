import { signInWithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSignInWithPassword() {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      console.error(error)
      // window.alert(error)
      toast.error(error.message, {
        position: "top-center"
      })
    }
  })
}
