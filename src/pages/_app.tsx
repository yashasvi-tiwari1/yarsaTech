import "@tech/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import React from "react";
import { IconSquareChevronsUp } from "@tabler/icons-react";
import NextProgress from "next-progress";
import Layout from "@tech/components/Layout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextProgress />
      <ThemeProvider enableSystem={true} attribute={"class"}>
      {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>

    </>
  );
}
