import React from "react";
import Layout from "layout";
import "styles/globals.scss";
import { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
