import type { Metadata } from "next";
import { Poppins, Preahvihear } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

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
      <body className="font-preahvihear bg-background text-foreground text-sm sm:text-base overflow-x-hidden">
        <Navbar />
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
