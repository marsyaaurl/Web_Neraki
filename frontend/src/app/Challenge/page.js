"use client";
import Button from "@/components/Button";
import ChallengePost from "@/components/ChallengePost";
import DialogChallenge from "@/components/DialogChallenge";
import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Challenge() {
  const [isOpen, setIsOpen] = useState(false);

  const esKopi = "/assets/images/esKopi.jpg";
  const adinda = "/assets/images/adinda.jpg";
  const sabun = "/assets/images/sabun.jpg";
  const kaos = "/assets/images/kaos.jpg";
  const ayu = "/assets/images/ayu.jpg";
  const budi = "/assets/images/budi.jpg";
  const rere = "/assets/images/rere.jpg";
  const sari = "/assets/images/sari.jpg";
  const ucup = "/assets/images/ucup.jpg";

  return (
    <>
      <NavbarLoggedIn />

      <div className="min-h-screen flex flex-col justify-between pt-32 mx-14 lg:mx-32 pb-9 gap-10">
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
        <div className=" flex flex-col gap-7">
          <ChallengePost
            username="AyuLestari_99"
            caption=" Cobain es kopi susu dari UMKM lokal, rasanya mantap dan harganya bersahabat!"
            hashtags="#Enak #Banget #Serius"
            imgUser={adinda}
            imgContent={esKopi}
            userNameComment="Adindadinda"
            userComment="REALLLLL!!!!"
            imgSrc={ayu}
          />
          <ChallengePost
            username="BudiSantoso_21"
            caption="Kaos dari UMKM ini nyaman banget dipakai dan desainnya unik!"
            hashtags="#FashionLokal #Nyaman #Keren"
            imgUser={rere}
            imgContent={kaos}
            userNameComment="RereJajan"
            userComment="Langsung checkout dong!"
            imgSrc={budi}
          />
          <ChallengePost
            username="SariDewi_07"
            caption="Sabun handmade dari UMKM ini wangi banget dan ramah lingkungan 🌿"
            hashtags="#SabunAlami #EcoFriendly #UMKM"
            commentPlaceHolder="Comment"
            imgUser={ucup}
            imgContent={sabun}
            userNameComment="UcupUMKM"
            userComment="Wajib coba sih ini!"
            imgSrc={sari}
          />
        </div>
        <div className=" flex justify-end sticky bottom-6">
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
