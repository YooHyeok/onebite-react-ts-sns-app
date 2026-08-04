import "./App.css";
import Tailwind from "@/components/tailwind/Tailwind";
import Shadcn from "@/components/Shadcn";
import { Route, Routes } from "react-router";

function App() {
  return (
    /* <div>
      <Tailwind />
      <Shadcn />
    </div> */
    <Routes>
      <Route path="/" element={<div>HOME</div>} />
      <Route path="/sign-in" element={<div>SignIn</div>} />
      <Route path="/sign-up" element={<div>SignUp</div>} />
    </Routes>
  );
}

export default App;
