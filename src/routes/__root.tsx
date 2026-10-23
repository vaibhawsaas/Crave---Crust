import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter, MobileNav } from "@/components/SiteChrome";
import { CartDrawer } from "@/components/CartDrawer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "#080808" }}>
      <div className="max-w-md text-center">
        <p className="eyebrow text-[#D6A85F] mb-4">404</p>
        <h1 className="font-display text-7xl font-bold text-[#F7F0E6]">Not Found</h1>
        <p className="mt-4 text-[#AAA39B]">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">Go home →</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "#080808" }}>
      <div className="max-w-md text-center">
        <p className="eyebrow text-[#FF7628] mb-4">Error</p>
        <h1 className="font-display text-2xl text-[#F7F0E6]">Something went wrong</h1>
        <p className="mt-2 text-sm text-[#AAA39B]">Something went wrong on our end. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-outline">Go home</a>
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
      { title: "Crave & Crust — Real Food. Unreal Cravings." },
      { name: "description", content: "Discover biryani, burgers, pizza, momos, cakes and more. Build your burger in 3D and order on WhatsApp." },
      { property: "og:title", content: "Crave & Crust — Real Food. Unreal Cravings." },
      { property: "og:description", content: "Interactive 3D food, premium dark design, WhatsApp ordering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      <SiteHeader />
      <main className="min-h-[60vh]">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
      <MobileNav />
      <CartDrawer />
    </QueryClientProvider>
  );
}
