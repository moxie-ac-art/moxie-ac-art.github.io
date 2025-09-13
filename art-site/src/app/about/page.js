import { Beth_Ellen } from "next/font/google";

const bethEllen = Beth_Ellen({
  variable: "--font-beth-ellen",
  weight:'400',
  subsets: ["latin"],
});

export default async function Page() {
    const style = "flex flex-col items-center justify-between bg-[#FFC8C8] rounded-xl p-10 " + bethEllen.className;
    return (
        <main className={style}>
            <div>
                <p>
                    Our story started when we met as roommates at NAU up in Flagstaff. 
                    We’ve been together for 5 years and got married in January this year!
                </p>
            </div>
            <div>
                <p>
                    Shay (she/they) started making ceramics in high school and college. She has continued making wonderful pieces and is the Secretary of the Arizona Clay Association.
                </p>
            </div>
            <div>
                <p>
                    Elie (they/she) started punch needling & rug tufting during lockdown, and has been drawing since they were little. They have done art markets at DreamWorks Animation.
                </p>
            </div>
        </main>
    );
}