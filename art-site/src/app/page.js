import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          Moxie Aradia-Carlos Art
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          Hi! We're Shay & Elie Aradia-Carlos. Shay makes beautiful ceramic pieces, and Elie makes rugs, prints, & stickers.
          Please bear with us as we tidy up our website. We're happy to have you here!
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a href="https://www.instagram.com/moxieacart_shay" target="_blank">
            Shay's Instagram: @moxieacart_shay
          </a>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a href="https://www.instagram.com/saturdaaaaaaaay" target="_blank">
            Elie's Instagram: @saturdaaaaaaaay
          </a>
        </div>
      </main>

    </div>
  );
}
