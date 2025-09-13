import { Beth_Ellen } from "next/font/google";

import Polaroid from "./Polaroid";

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
              alt="Photo and Shay and Elie in front of a pride parade mural"
              text="Shay & Elie"
            />
          </div>
          <div className="flex flex-col items-center justify-between m-5">
            <div className="translate-y-5">
              <svg width="115" height="35">
                <rect width="115" height="35" fill="#E2F7FF" fillOpacity={0.8}/>
              </svg>
            </div>
            <div className="flex gap-4 items-center flex-col sm:flex-row bg-[#FFC8C8] p-5">
              Hi! We're Shay & Elie Aradia-Carlos. Shay makes beautiful ceramic pieces, and Elie makes rugs, prints, & stickers.
              <br></br>
              Please bear with us as we tidy up our website. We're happy to have you here!
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between bg-[#D9D9D9] rounded-2xl w-[600px] h-[360px]">
          <div className="flex flex-col items-center justify-between m-5">
            <div className="translate-y-5">
              <svg width="115" height="35">
                <rect width="115" height="35" fill="#E2F7FF" fillOpacity={0.8}/>
              </svg>
            </div>
            <div className="flex gap-4 items-center flex-col sm:flex-row bg-[#8EBC7C] p-5 text-[24px] text-center">
              Follow us on social media!
            </div>
          </div>
          <div className="text-center">
            <a href="https://www.instagram.com/moxieacart_shay" target="_blank">
              Shay's Instagram: @moxieacart_shay
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
