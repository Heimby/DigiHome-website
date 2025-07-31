import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "./i18n/i18n";
import useDocumentTitle from "./hooks/useDocumentTitle";
import { Toaster } from "react-hot-toast";

import appletouchicon from "~/assets/favicon/apple-touch-icon.png";
import favicon32x32 from "~/assets/favicon/favicon-32x32.png";
import favicon16x16 from "~/assets/favicon/favicon-16x16.png";
import webmanifest from "~/assets/favicon/site.webmanifest";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="apple-touch-icon" sizes="180x180" href={appletouchicon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
        <link rel="manifest" href={webmanifest} />
      </head>
      <body className="h-screen">
        {/* env insertion point is where Environment variables for the docker image will be inserted */}
        <noscript id="env-insertion-point"></noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          src="https://cdn.counter.dev/script.js"
          data-id="b3798075-40aa-4fd7-ac58-6c2574a4892d"
          data-utcoffset="1"
        ></script>
      </body>
    </html>
  );
}

export default function App() {
  useDocumentTitle();
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

export async function loader() {
  return {
    version: "1.0.0",
  };
}

export function HydrateFallback({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loading loading-spinner loading-xl" />
      <p>Loading version {loaderData.version}, please wait...</p>
    </div>
  );
}
