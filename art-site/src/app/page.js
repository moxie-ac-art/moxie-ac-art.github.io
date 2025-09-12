import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-between">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          Hi! We're Shay & Elie Aradia-Carlos. Shay makes beautiful ceramic pieces, and Elie makes rugs, prints, & stickers.
          <br></br>
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
  );
}
