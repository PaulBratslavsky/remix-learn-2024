import { Outlet } from "@remix-run/react";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Settings | Profile" },
    { name: "description", content: "Profile page" },
  ];
};

export default function ProfileLayoutRoute() {
  return (
    <div>
      <h1>Profile Layout Route</h1>
      <Outlet />
    </div>
  );
}
