import { BrowserRouter, Route, Routes } from "react-router";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path="/sign-in" element={<AuthLayout />}>
            <Route index element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
