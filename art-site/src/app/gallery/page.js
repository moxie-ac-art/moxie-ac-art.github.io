import Image from "next/image";

export default async function Page() {
    const style = "flex flex-col items-center justify-between bg-[#C1DEFF] rounded-xl p-20 w-[600px] h-[360px]";
    return (
        <main className={style}>
            <Image 
                src="./Shelf.png"
                alt="Wooden shelf"
                width={437}
                height={437}
                className="p-5"
            />
            <Image 
                src="./Blue Bowl.png"
                alt="A brown ceramic bowl with thick light blue stripes"
                width={63}
                height={53}
                className="absolute bottom-62 left-30 rotate-5"
            />
            <Image 
                src="./Bear Bear.png"
                alt="A brown ceramic bear"
                width={45}
                height={53}
                className="absolute bottom-61 left-80"
            />
            <Image 
                src="./Brown Mug.png"
                alt="A brown mug"
                width={43}
                height={46}
                className="absolute bottom-45 left-50"
            />
            <Image 
                src="./Capricornicus.png"
                alt="A white ceramic goat"
                width={50}
                height={55}
                className="absolute bottom-45 left-95"
            />
        </main>
    );
}