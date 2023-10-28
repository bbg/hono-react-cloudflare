//
// BEGIN
//

import { lazy, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const DataList = lazy(() => import("@app/components/DataList/data-list"));
const Heading = lazy(() => import("@app/components/Heading/heading"));

function Application() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
          },
        },
      })
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Example project showing how to deploy your Hono+React(SSR) application to Cloudflare Workers Sites" />
        <title>Hono/React + Cloudflare</title>
        <link href="/assets/globals.css" rel="stylesheet" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <main className="main">
            <Heading />
            <DataList />
          </main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default Application;

//
// END
//
