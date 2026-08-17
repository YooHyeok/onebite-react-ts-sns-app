import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: { 
    watch: {
      ignored: ["**/server/**"] // vite가 서버폴더 아래의 파일에 변화가 발생하더라도 React App을 리렌더링 시키는 등의 불필요한 동작을 방지.
    }
  }
});
