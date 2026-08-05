import "./App.css";
import Tailwind from "@/components/tailwind/Tailwind";
import Shadcn from "@/components/Shadcn";
import { Route, Routes } from "react-router";
import SignInPage from "@/pages/sign-in-page";
import SignUpPage from "@/pages/sign-up-page";

function App() {
  return (
    /* <div>
      <Tailwind />
      <Shadcn />
    </div> */
    <Routes>
      <Route path="/" element={<div>HOME</div>} />
      {/* <Route path="/sign-in" element={<div>SignIn</div>} />
      <Route path="/sign-up" element={<div>SignUp</div>} /> */}
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
