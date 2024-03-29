import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Layout} from "@/extras";
import Head from "next/head";
import Favicon from ".../public/favicon.ico";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={Favicon.src} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
