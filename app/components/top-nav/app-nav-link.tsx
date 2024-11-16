import { NavLink, useNavigation } from "@remix-run/react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

import styles from "./style.module.css";

interface AppNavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function AppNavLink({ to, children }: AppNavLinkProps) {
  const navigation = useNavigation();
  const isLoading =
    navigation.state === "loading" && navigation.location.pathname === to;
  return (
    <NavLink className={styles.appNavLink} to={to} prefetch="intent">
      {({ isActive }) => {
        return (
          <div
            className={cn(
              styles.appNavLinkItem,
              isActive ? styles.active : "",
              isLoading ? styles.pending : ""
            )}
          >
            {children}
          </div>
        );
      }}
    </NavLink>
  );
}
