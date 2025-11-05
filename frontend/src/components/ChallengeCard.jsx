"use client";
import Image from "next/image";
import Mascot from "../../public/assets/images/CharacterNeraki3.png";
import Link from "next/link";

export default function ChallengeCard() {
    return (
        <>
                <div 
                className="relative w-full md:w-1/3 h-auto cursor-pointer transition-transform hover:scale-105"
                >
                    <div className="bg-[#f5e1d9] rounded-2xl w-full p-6 pb-0 relative overflow-hidden border-l-8 border-[#ba3902]">
                        <h1 className="text-[#ba3902] font-bold text-2xl mb-1 relative z-10">
                        Challenge
                        </h1>
                        <p className="text-[#ba3902] text-lg mb-4 relative z-10">
                        Ayo mengenal UMKM lebih jauh!
                        </p>
            
                        <div className="flex justify-end items-end relative z-10">
                        <Image
                            src={Mascot}
                            alt="Mascot"
                            className="w-64 h-auto object-contain"
                        />
                        </div>
                    </div>
                    <Link href="/Challenge" className="absolute inset-0 z-10" />
                </div>
        </>
    )
}