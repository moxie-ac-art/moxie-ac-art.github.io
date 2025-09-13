import { Bagel_Fat_One } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-bagel-fat-one",
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "Moxie Aradia-Carlos Art",
  description: "Business Website",
};

function Header() {
  return (
    <header>
      <div className=" flex flex-col container items-center">
        <a href="/">
          <Image 
            src="./Moxie Art Logo.PNG"
            alt="Moxie Aradia-Carlos Art Logo"
            width={600}
            height={1084}
          />
        </a>
      </div>
    </header>
  );
}

function Nav(){
  const home_style = "block flex-none items-center mx-2 p-3 bg-[#D9D9D9] rounded-xl text-[#FEA71B] text-[24px] relative -z-100 " + bagelFatOne.className;
  const about_style = "block flex-none items-center mx-2 p-3 bg-[#FFC8C8] rounded-xl text-[#FE1B1B] text-[24px] relative -z-100 " + bagelFatOne.className;
  const gallery_style = "block flex-none items-center mx-2 p-3 bg-[#C1DEFF] rounded-xl text-[#006EFF] text-[24px] relative -z-100 " + bagelFatOne.className;
  const contact_style = "block flex-none items-center mx-2 p-3 bg-[#8EBC7C] rounded-xl text-[#1A9A00] text-[24px] relative -z-100 " + bagelFatOne.className;
  
  return (
    <nav className="flex items-center py-2.5 translate-y-5">
      <div className="">
        <Link href="/"><span className={home_style}>home</span></Link>
      </div>
      <div className="">
        <Link href="/about"><span className={about_style}>about</span></Link>
      </div>
      <div className="">
        <Link href="/gallery"><span className={gallery_style}>gallery</span></Link>
      </div>
      <div className="">
        <Link href="/contact"><span className={contact_style}>contact</span></Link>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-between container mx-auto my-5">
        <div>
          <Header />
          <Nav />
          <div className="relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
