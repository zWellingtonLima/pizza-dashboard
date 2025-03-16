import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { ThemeProvider } from "./theme/theme-provider";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">

      <Toaster richColors />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
