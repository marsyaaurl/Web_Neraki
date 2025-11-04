"use client";
import Button from "@/components/Button";
import ChallengePost from "@/components/ChallengePost";
import DialogChallenge from "@/components/DialogChallenge";
import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Challenge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavbarLoggedIn />

      <div className="min-h-screen flex flex-col justify-between pt-32 mx-14 lg:mx-32 pb-9">
        {/* CTA */}
        <div className=" flex flex-col gap-5 ">
          <h1 className="text-black font-bold text-3xl ">
            Sudah coba UMKM lokal? <br /> Unggah fotomu dan dukung mereka!
          </h1>
          <div>
            <Button
              label="Unggah Fotomu!"
              variant=" blue"
              className="py-2.5 px-6"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <div>
          <ChallengePost />
        </div>
        <div className=" flex justify-end sticky bottom-0">
          <div
            className=" bg-blue w-fit p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-blueHover transition-shadow"
            onClick={() => setIsOpen(true)}
          >
            <Plus size={40} color="#fff" />
          </div>
        </div>
      </div>
      {isOpen && <DialogChallenge onClose={() => setIsOpen(false)} />}
    </>
  );
}
