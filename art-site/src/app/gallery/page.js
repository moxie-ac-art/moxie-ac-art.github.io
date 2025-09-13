import Image from "next/image";

export default async function Page() {
    const style = "flex flex-col items-center justify-between bg-[#C1DEFF] rounded-xl p-10 w-[600px]";
    return (
        <main className={style}>
            <Image 
                src="./Shelf.png"
                alt="Wooden shelf"
                width={800}
                height={400}
                className="p-5"
            />
        </main>
    );
}