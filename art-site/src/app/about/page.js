import { Beth_Ellen } from "next/font/google";

import Polaroid from "../Polaroid";
import Note from "../Note";

const bethEllen = Beth_Ellen({
  variable: "--font-beth-ellen",
  weight:'400',
  subsets: ["latin"],
});

export default async function Page() {
    const style = "flex flex-col items-center justify-between bg-[#FFC8C8] rounded-xl p-10 w-[600px] text-[14px] " + bethEllen.className;
    return (
        <main className={style}>
            <div className="flex flex-row items-center justify-between">
                <Note 
                    text="Our story started when we met as roommates at NAU up in Flagstaff. 
                    We’ve been together for 5 years and got married in January this year!"
                    color="#D9D9D9"
                />
                <div className="relative flex items-center p-10 rotate-7">
                    <Polaroid 
                        src="./Shay and Elie Wedding.jpg"
                        alt="Photo and Shay and Elie at their wedding"
                        text="Shay & Elie"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="relative flex items-center p-10 -rotate-7">
                    <Polaroid 
                        src="./Shay Ceramics.jpg"
                        alt="Shay throwing a ceramic plate"
                        text="Shay"
                        width={100}
                    />
                </div>
                <Note 
                    text="Shay (she/they) started making ceramics in high school and college. She has continued making wonderful pieces and is the Secretary of the Arizona Clay Association."
                    color="#D9D9D9"
                />
            </div>
            <div className="flex flex-row items-center justify-between">
                <Note 
                    text="Elie (they/she) started punch needling & rug tufting during lockdown, and has been drawing since they were little. They have done art markets at DreamWorks Animation."
                    color="#D9D9D9"
                />
                <div className="relative flex items-center p-10 rotate-7">
                    <Polaroid 
                        src="./Elie Rug.jpg"
                        alt="Elie holding a Shrek rug next to a statue of Shrek"
                        text="Elie"
                    />
                </div>
            </div>
        </main>
    );
}