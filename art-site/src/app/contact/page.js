import { Beth_Ellen } from "next/font/google";

const bethEllen = Beth_Ellen({
  variable: "--font-beth-ellen",
  weight:'400',
  subsets: ["latin"],
});

export default async function Page() {
    const style = "flex flex-col items-center justify-between bg-[#8EBC7C] rounded-xl p-10 " + bethEllen.className;
    return (
        <main className={style}>
            <p>Please contact us at 
                <br></br>
                <a href="mailto:moxie.ac.art@gmail.com"><u>moxie.ac.art@gmail.com</u></a>
                <br></br>
                and we’ll get back to you as soon as we can!
            </p>
        </main>
    );
}