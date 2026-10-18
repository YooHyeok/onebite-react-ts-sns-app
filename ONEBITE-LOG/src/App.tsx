import RootRoute from "@/root-route";
import SessionProvider from "@/provider/session-provider";
import ModalProvider from "@/provider/modal-provider";
import { useSetTheme, useTheme } from "@/store/theme.ts";
import { useEffect } from "react";

export default function App() {
  const currentTheme = useTheme();
  const setTheme = useSetTheme();
  useEffect(() => {
    setTheme(currentTheme);
  }, []);
  return (
    <SessionProvider>
      <ModalProvider>
        <RootRoute />
      </ModalProvider>
    </SessionProvider>
  );
}
