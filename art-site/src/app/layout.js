import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moxie Aradia-Carlos Art",
  description: "Business Website",
};

function Header() {
  return (
    <header className="p-1">
      <div className="container mx-auto px-4 w-50">
        <a href="/">
          <Image 
            src="./Moxie Art Logo.PNG"
            alt="Moxie Aradia-Carlos Art Logo"
            width={600}
            height={1084}
          />
        </a>
        <Nav />
      </div>
    </header>
  );
}

function Nav(){
  return (
    <nav className="flex items-center py-2.5">
      <div className="block flex-none items-center mx-2">
        <Link href="/">home </Link>
      </div>
      <div className="block flex-none items-center mx-2">
        <Link href="/about">about </Link>
      </div>
      <div className="block flex-none items-center mx-2">
        <Link href="/gallery">gallery </Link>
      </div>
      <div className="block flex-none items-center mx-2">
        <Link href="/contact">contact </Link>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-between container mx-auto">
        <div className="mx-auto m-10">
          <br />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
