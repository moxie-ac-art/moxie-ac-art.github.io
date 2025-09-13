import { Beth_Ellen } from "next/font/google";

import Polaroid from "./Polaroid";
import Note from "./Note";

const bethEllen = Beth_Ellen({
  variable: "--font-beth-ellen",
  weight:'400',
  subsets: ["latin"],
});

export default function Home() {
  const style = "flex flex-col items-center justify-between " + bethEllen.className;
  return (
      <main className={style}>
        <div className="flex flex-row items-center justify-between bg-[#D9D9D9] rounded-2xl w-[600px] h-[360px]">
          <div className="relative flex items-center p-10 -rotate-7">
            <Polaroid 
              src="./Shay and Elie.jpg"
              alt="Photo and Shay and Elie in front of a pride parade mural in San Francisco!"
              text="Shay & Elie"
            />
          </div>
          <Note 
            text="Hi! We're Shay & Elie Aradia-Carlos. Shay makes beautiful ceramic pieces, and Elie makes awesome rugs, prints, & stickers."
            color="#FFC8C8"
          />
        </div>
        <div className="flex flex-row items-center justify-between bg-[#D9D9D9] rounded-2xl w-[600px] h-[360px]">
          <div className="text-center text-[24px]">
            <Note 
              text="Follow us on social media!"
              color="#8EBC7C"
            />
          </div>
          <div className="text-center">
            <a href="https://www.instagram.com/moxieacart_shay" target="_blank">
              Shay's Instagram: @MoxieACart_shay
            </a>
            <br />
            <br />
            <a href="https://www.instagram.com/saturdaaaaaaaay" target="_blank">
              Elie's Instagram: @saturdaaaaaaaay
            </a>
          </div>
        </div>
      </main>
  );
}
