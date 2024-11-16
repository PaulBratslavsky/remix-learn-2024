import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return new Promise<{ app: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        app: "From App Loader",
      });
    }, 2000);
  });
}

export default function AppRoute() {
  const { app } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>App</h1>
      <pre>{app}</pre>
    </div>
  );
}
