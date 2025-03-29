import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";

import { queryClient } from "./lib/react-query";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { NotFoundErrorBoundary } from "./pages/404";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Orders } from "./pages/app/orders/orders";
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
            <Route path="orders" element={<Orders />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>

          <Route path="*" element={<NotFoundErrorBoundary />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
