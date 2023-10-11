import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignIn />} />
      <Route path="/signin" element={<SignUp />} />
    </Routes>
  );
}
