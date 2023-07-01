import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Octcat from "@/components/Octcat";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <Octcat />
      <Component {...pageProps} />
    </main>
  );
}
