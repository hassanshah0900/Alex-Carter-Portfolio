import type { Metadata } from "next";
import { Poppins, Preahvihear } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--poppins",
});

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--preahvihear",
});

export const metadata: Metadata = {
  title: "Alex Carter",
  description: "I Graphic Designer who takes pride in his work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${preahvihear.variable}`}>
      <head>
        <Script id="mcjs" strategy="beforeInteractive">
          {`!(function (c, h, i, m, p) {
                (m = c.createElement(h)),
                  (p = c.getElementsByTagName(h)[0]),
                  (m.async = 1),
                  (m.src = i),
                  p.parentNode.insertBefore(m, p);
              })(
                document,
                "script",
                "https://chimpstatic.com/mcjs-connected/js/users/9d8f8e48318f8e22f255d336d/223016986398ac1b7da23757f.js"
              );`}
        </Script>
      </head>
      <body className="font-preahvihear bg-background text-foreground text-sm sm:text-base overflow-x-hidden">
        <Navbar />
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
