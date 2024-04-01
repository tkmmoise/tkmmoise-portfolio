import type { AppProps } from "next/app";
import type { Metadata } from "next";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.scss";
import "@/styles/card.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio of Komi Moise TENGUE",
  description:
    "This is the portfolio of Komi Moise TENGUE. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges."
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Paris"
      messages={pageProps.messages}
    >
      <ToastContainer />
      <ThemeProvider attribute="class">
        <div className={inter.className}>
          <div className="relative mx-auto min-h-screen px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <Navbar />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
