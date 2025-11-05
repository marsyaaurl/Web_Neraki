"use client";
import Mascot from "../../public/assets/images/CharacterNeraki2.png";
import Image from "next/image";
import { useState } from "react";

export default function KitDate() {
    const [isClicked, setIsClicked] = useState(false);
    
    return (
        <>
            <div 
                className="relative w-full md:w-1/3 h-auto cursor-pointer transition-transform hover:scale-105"
            >
                <div className="bg-[#FFF9DA] rounded-2xl w-full p-6 pb-0 relative overflow-hidden border-l-8 border-yellowHover">
                <h1 className="text-yellowHover font-bold text-2xl mb-1 relative z-10">
                    Perfect Kit Date
                </h1>
                <p className="text-yellowHover text-lg mb-4 relative z-10">
                    Rencana hari ini dari kami untukmu!
                </p>
        
                <div className="flex justify-end items-end relative z-10">
                    <Image
                    src={Mascot}
                    alt="Mascot"
                    className="w-64 h-auto object-contain"
                    />
                </div>
                </div>
            </div>
        </>
    )
}