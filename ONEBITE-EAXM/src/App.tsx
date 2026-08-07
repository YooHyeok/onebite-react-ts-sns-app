import "./App.css";
import Tailwind from "@/components/tailwind/Tailwind";
import Shadcn from "@/components/Shadcn";
import { Outlet, Route, Routes } from "react-router";
import IndexPage from "@/pages/index-page";
import SignInPage from "@/pages/sign-in-page";
import SignUpPage from "@/pages/sign-up-page";
import CounterPage from "@/pages/counter-page";

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
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
