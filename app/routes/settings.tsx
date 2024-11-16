import {
  Link,
  Outlet,
  useRouteError,
  useRouteLoaderData,
} from "@remix-run/react";

import type { MetaFunction } from "@remix-run/node";
import { ShowError } from "~/components/error";

export const meta: MetaFunction = () => {
  return [
    { title: "Settings" },
    { name: "description", content: "Settings page" },
  ];
};

export async function loader() {
  return new Promise<{ settings: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        settings: "From Settings Loader",
      });
    }, 2000);
  });
}

export default function SettingsLayoutRoute() {
  const data = useRouteLoaderData<typeof loader>("routes/settings");
  if (!data) return null;
  const { settings } = data;
  return (
    <div>
      <h1>Settings Layout</h1>
      <p>{settings}</p>
      <Link to="profile">Profile</Link>
      <Outlet />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <ShowError error={error as Error} heading="Settings Layout Error" />;
}
