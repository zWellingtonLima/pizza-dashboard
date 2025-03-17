import { Link, LinkProps, useLocation } from "react-router";

import { cn } from "@/lib/utils";

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return <Link className={cn("flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground", pathname === props.to && "text-foreground underline")} {...props}/>
}