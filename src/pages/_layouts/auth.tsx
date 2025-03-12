import { Pizza } from "lucide-react";
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground bg-muted justify-between p-10 text-muted-foreground flex flex-col ">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="size-5"/>
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex items-center justify-center flex-col">
        <Outlet />
      </div>
    </div>
  );
}
