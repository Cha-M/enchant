import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href={`${router.basePath}/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
