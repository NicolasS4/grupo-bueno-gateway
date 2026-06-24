import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("Erro capturado pelo ErrorBoundary:", error);
  const router = useRouter();
  
  useEffect(() => {
    // Caso precise de alguma lógica de analytics, coloque aqui
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        
        {/* Adicionado: Caixa de Debug exibindo o erro exato na tela */}
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left overflow-auto max-h-[400px]">
          <h3 className="text-sm font-bold text-red-800 mb-2">Detalhes do Erro (Debug):</h3>
          <p className="text-sm text-red-700 font-semibold">{error.message}</p>
          {error.stack && (
            <pre className="mt-2 text-xs text-red-600 whitespace-pre-wrap font-mono">
              {error.stack}
            </pre>
          )}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GB Grupo Bueno — Soluções Empresariais" },
      { name: "description", content: "Grupo empresarial com soluções completas em contabilidade, inteligência tributária, gestão financeira, certificado digital e marcas e patentes." },
      { name: "author", content: "GB Grupo Bueno" },
      { property: "og:title", content: "GB Grupo Bueno — Soluções Empresariais" },
      { property: "og:description", content: "Grupo empresarial com soluções completas em contabilidade, inteligência tributária, gestão financeira, certificado digital e marcas e patentes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "GB Grupo Bueno — Soluções Empresariais" },
      { name: "twitter:description", content: "Grupo empresarial com soluções completas em contabilidade, inteligência tributária, gestão financeira, certificado digital e marcas e patentes." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c98c9dc3-7321-4851-985e-a36382d84b0a/id-preview-6d4e58fa--7fadea28-bd98-4a70-b7e5-81e083c0838d.lovable.app-1782246787175.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c98c9dc3-7321-4851-985e-a36382d84b0a/id-preview-6d4e58fa--7fadea28-bd98-4a70-b7e5-81e083c0838d.lovable.app-1782246787175.png" },
    ],
    links: [
      { rel: "icon", href: "/__l5e/assets-v1/43b90092-0ef9-4808-a93b-d435e4d4682a/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}