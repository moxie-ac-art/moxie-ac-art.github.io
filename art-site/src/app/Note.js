"use client";

export default function Note({text, color}) {
    const noteStyle = "flex gap-4 items-center flex-col sm:flex-row p-5 bg-[" + color + "] shadow-xl";
    return (
        <div className="flex flex-col items-center justify-between m-5">
            <div className="translate-y-5">
              <svg width="115" height="35">
                <rect width="115" height="35" fill="#E2F7FF" fillOpacity={0.8}/>
              </svg>
            </div>
            <div className={noteStyle}>
              {text}
            </div>
          </div>
    );
}