import { Outlet } from "@remix-run/react";

export default function SettingsIndexRoute() {
  return (
    <div>
      <h1>Settings</h1>
      <Outlet />
    </div>
  )
}
