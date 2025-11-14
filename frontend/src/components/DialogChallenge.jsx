"use client";

import { X } from "lucide-react";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function DialogChallenge({ onClose, onSubmit }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [captionText, setCaptionText] = useState("");
  const [userProfilePic, setUserProfilePic] = useState(
    "/path/to/default/avatar.jpg"
  );
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const savedAvatar = localStorage.getItem("avatar");
    if (stored) {
      const parsed = JSON.parse(stored);

      if (parsed?.username) {
        setUserName(parsed.username);
      }
    }
    if (savedAvatar) {
      setUserProfilePic(savedAvatar);
    }
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaptionText(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedFile && captionText.trim()) {
      const newPost = {
        username: userName,
        caption: captionText,
        imgContent: URL.createObjectURL(selectedFile),
        hashtags: "#UMKM #Neraki",
        imgUser: userProfilePic,
        userNameComment: "",
        userComment: "",
        imgSrc: userProfilePic,
      };

      onSubmit(newPost);
      onClose();
    } else {
      alert("Harap pilih file dan isi caption.");
    }
  };

  return (
    <main className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
      <section className="relative bg-white flex flex-col py-6 px-8 md:px-10 rounded-3xl w-11/12 max-w-lg gap-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-red-700 hover:text-red-900 transition-colors"
        >
          <X size={28} color="#8c2b02" />
        </button>

        <header className="text-center">
          <h2 className="text-3xl font-bold text-blue">New Post</h2>
        </header>

        <div className="flex gap-2 items-center">
          <div className="w-fit h-fit border-2 border-red rounded-full flex justify-center">
            <img
              src={userProfilePic}
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">{userName}</h1>
        </div>

        <form className="flex flex-col gap-5">
          <div className="bg-yellowLightHover h-60 rounded-xl flex items-end justify-start border border-yellow">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="text-sm text-blue"
            />
          </div>

          <textarea
            rows={6}
            placeholder="Tambahkan keterangan..."
            value={captionText}
            onChange={handleCaptionChange}
            className="border-2 border-x-blueLight py-3 px-3 outline-none w-full rounded-md placeholder:text-blueHover text-blue"
          />

          <Button
            label="Bagikan"
            variant="blue"
            className="py-2.5 px-3 w-full"
            onClick={handleSubmit}
          />
        </form>
      </section>
    </main>
  );
}
