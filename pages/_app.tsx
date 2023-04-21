// import Layout from "@/layout";
// import "@/styles/globals.scss";
// import type { AppProps } from "next/app";

// function App({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default App;
import React from "react";
import Layout from "layout";
import "styles/globals.scss";
import { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

/**
 * Admin Root
 */

function RootApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: true,
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            staleTime: 0,
            cacheTime: 0,
          },
        },
      })
  );

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        {/* @ts-ignore */}
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Layout>
  );
}
export default RootApp;
