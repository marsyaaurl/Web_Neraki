"use client";
import Button from "@/components/Button";
import ChallengePost from "@/components/ChallengePost";
import DialogChallenge from "@/components/DialogChallenge";
import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function Challenge() {
  const [isOpen, setIsOpen] = useState(false);

  const [posts, setPosts] = useState([
    {
      username: "AyuLestari_99",
      caption:
        " Cobain es kopi susu dari UMKM lokal, rasanya mantap dan harganya bersahabat!",
      hashtags: "#Enak #Banget #Serius",
      imgUser: "/assets/images/adinda.jpg",
      imgContent: "/assets/images/eskopi.jpg",
      userNameComment: "Adindadinda",
      userComment: "REALLLLL!!!!",
      imgSrc: "/assets/images/ayu.jpg",
    },
    {
      username: "BudiSantoso_21",
      caption: "Kaos dari UMKM ini nyaman banget dipakai dan desainnya unik!",
      hashtags: "#FashionLokal #Nyaman #Keren",
      imgUser: "/assets/images/rere.jpg",
      imgContent: "/assets/images/kaos.jpg",
      userNameComment: "RereJajan",
      userComment: "Langsung checkout dong!",
      imgSrc: "/assets/images/budi.jpg",
    },
    {
      username: "SariDewi_07",
      caption:
        "Sabun handmade dari UMKM ini wangi banget dan ramah lingkungan 🌿",
      hashtags: "#SabunAlami #EcoFriendly #UMKM",
      imgUser: "/assets/images/ucup.jpg",
      imgContent: "/assets/images/sabun.jpg",
      userNameComment: "UcupUMKM",
      userComment: "Wajib coba sih ini!",
      imgSrc: "/assets/images/sari.jpg",
    },
  ]);

  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAvatar, setCurrentUserAvatar] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const savedAvatar = localStorage.getItem("avatar");

    if (storedUser?.username) {
      setCurrentUserName(storedUser.username);
    }

    setCurrentUserAvatar(
      savedAvatar || "/assets/images/default-avatar.png"
    );
  }, []);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <NavbarLoggedIn />

      <div className="min-h-screen flex flex-col justify-between pt-32 mx-8 lg:mx-24 pb-9 gap-10">
        {/* CTA */}
        <div className="flex flex-col gap-5">
          <h1 className="text-black font-bold text-3xl">
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

        {/* POST LIST */}
        <div className="flex flex-col gap-7">
          {posts.map((post, index) => (
            <ChallengePost
              key={index}
              username={post.username}
              caption={post.caption}
              hashtags={post.hashtags}
              imgUser={post.imgUser}     
              imgSrc={post.imgSrc}       
              imgContent={post.imgContent}
              userNameComment={post.userNameComment}
              userComment={post.userComment}
              currentUserName={currentUserName}
              currentUserProfilePic={currentUserAvatar}
            />
          ))}
        </div>

        {/* FAB BUTTON */}
        <div className="flex justify-end sticky bottom-6">
          <div
            className="bg-blue w-fit p-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-blueHover transition-shadow"
            onClick={() => setIsOpen(true)}
          >
            <Plus size={40} color="#fff" />
          </div>
        </div>
      </div>

      {isOpen && (
        <DialogChallenge
          onClose={() => setIsOpen(false)}
          onSubmit={handleNewPost}
          currentUserName={currentUserName}
          currentUserAvatar={currentUserAvatar}
        />
      )}
    </>
  );
}
