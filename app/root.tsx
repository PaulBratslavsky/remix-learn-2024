import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

import { AppSideNav } from "./components/top-nav";
import { ShowError } from "./components/error";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta: MetaFunction = () => [
  { title: "Cool Remix App" },
  { name: "description", content: "Welcome to my cool Remix app!" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-muted text-foreground flex md:flex-row flex-col md:h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <AppSideNav />
      <div className="flex-1 p-2">
        <Outlet />
      </div>
    </>
  );
}


export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <Layout>
      <ShowError error={error as Error} />
      <ScrollRestoration />
      <Scripts />
    </Layout>
  );
}