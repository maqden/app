import "./app.css";

import React from "react";
import type {Route} from "./+types/root";
import {isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData,} from "react-router";

import {AuthProvider} from "~/contexts/auth-context";
import {authService} from "~/services/auth-service";

export const links: Route.LinksFunction = () => [
  {rel: "preconnect", href: "https://fonts.googleapis.com"},
  {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap",},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",},
  {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poetsen+One&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",},
];

export async function loader() {
  try {
    const user = await authService.getUser();

    return {user};
  } catch (error) {
    return {user: null};
  }
}

export function Layout({children}: { children: React.ReactNode }) {
  const {user} = useLoaderData<typeof loader>();

  return (
    <html lang="pt_BR">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Meta/>
      <Links/>
    </head>
    <body>
    <AuthProvider authenticated={user}>
      {children}
    </AuthProvider>
    <ScrollRestoration/>
    <Scripts/>
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet/>;
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "Ocorreu um erro não esperado. Por favor, tente novamente mais tarde.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Erro";
    details = error.status === 404 ? "A página não encontrada." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="text-center space-y-8">
        <div className="leading-relaxed space-y-4">
          <h1 className="font-title text-9xl">{message}</h1>
          <p className="text-lg">{details}</p>
        </div>
        <Link to="/" className="link">Voltar para a página inicial</Link>
        {stack && (<pre className="w-full text-start  py-12 overflow-x-auto"><code>{stack}</code></pre>)}
      </div>
    </main>
  );
}
