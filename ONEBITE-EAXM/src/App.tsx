import "./App.css";
import Tailwind from "@/components/tailwind/Tailwind";
import Shadcn from "@/components/Shadcn";
import { Outlet, Route, Routes } from "react-router";
import IndexPage from "@/pages/router-basic/index-page";
import SignInPage from "@/pages/router-basic/sign-in-page";
import SignUpPage from "@/pages/router-basic/sign-up-page";
import CounterPage from "@/pages/zustand/counter-page";
// import TodoListPage from "@/pages/zustand/todo-list/todo-list-page";
import TodoListPage from "@/pages/tanstack-query/todo-list-page";
import TodoDetailPage from "@/pages/tanstack-query/todo-detail-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    /* <div>
      <Tailwind />
      <Shadcn />
    </div> */
    <Routes>
      {/* <Route path="/" element={<div>HOME</div>} /> */}
      {/* <Route path="/sign-in" element={<div>SignIn</div>} />
      <Route path="/sign-up" element={<div>SignUp</div>} /> */}
      <Route path="/" element={<IndexPage />} />
      {/* <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} /> */}
      <Route path="/counter" element={<CounterPage />}></Route>
      <Route path="/todolist" element={<TodoListPage />}></Route>
      <Route path="/todolist/:id" element={<TodoDetailPage />}></Route>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
