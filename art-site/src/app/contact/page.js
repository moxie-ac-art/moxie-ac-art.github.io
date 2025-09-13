import { Beth_Ellen, Carter_One } from "next/font/google";

import Note from "../Note";

const bethEllen = Beth_Ellen({
  variable: "--font-beth-ellen",
  weight:'400',
  subsets: ["latin"],
});

const carterOne = Carter_One({
  variable: "--font-carter-one",
  weight:'400',
  subsets: ["latin"]
})

export default async function Page() {
    const style = "flex flex-col items-center justify-between bg-[#8EBC7C] rounded-xl p-10 w-[600px] " + bethEllen.className;
    const emailStyle = "text-[20px] " + carterOne.className;
    const contactText = (
        <p className="text-center text-[14px]">
            Please contact us at: 
            <br></br>
            <a href="mailto:moxie.ac.art@gmail.com" className={emailStyle}>
                <u>moxie.ac.art@gmail.com</u>
            </a>
            <br></br>
            and we’ll get back to you as soon as we can!
        </p>
    );
    return (
        <main className={style}>
            <Note 
                text={contactText}
                color="#C1DEFF"
            />
        </main>
    );
}