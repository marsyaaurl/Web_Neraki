"use client";

import { CircleUser } from "lucide-react";
import Button from "./Button";
import { useEffect, useState } from "react";


export default function Dialog() {
  const [profileData, setProfileData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({});
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setEditableData(savedUser);
      const mappedData = [
        { label: "Nama Lengkap", key: "fullname" },
        { label: "Tanggal Lahir", key: "dob" },
        { label: "Email", key: "email" },
        { label: "Nama Pengguna", key: "username" },
        { label: "Nomor Telepon", key: "phonenum" },
        { label: "Alamat", key: "address" },
      ];
      setProfileData(mappedData);
    }
  }, []);

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  const handleChange = (e) => {
    setEditableData({
      ...editableData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(editableData));
    setIsEditing(false);
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem("avatar", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarDelete = () => {
    localStorage.removeItem("avatar");
    setAvatar(null);
  };

  return (
    <main className="fixed bg-black inset-0 bg-opacity-20 flex items-center justify-center overflow-auto ">
      
      <section
        className="bg-white mx-8  md:mx-10 w-full lg:w-1/2 p-10 rounded-3xl flex flex-col gap-7 justify-center mt-72 mb-5 md:mb-0 md:mt-20 shadow-lg "
        aria-label="Profil Pengguna"
      >
        <header className="flex justify-center">
          <h2 className="text-4xl font-bold text-blue">Your Profile</h2>
        </header>

        <article className="flex flex-wrap-reverse justify-center lg:flex-nowrap lg:justify-between gap-5">
          {/* Data Section */}
          <section className="w-full" aria-label="Data Pengguna">
            <div className="flex flex-col gap-3">
              {profileData.map(({ label, key }, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <label htmlFor={key} className="text-blue text-sm">
                    {label}
                  </label>
                  {isEditing ? (
                    <input
                      id={key}
                      type="text"
                      name={key}
                      value={editableData[key] || ""}
                      onChange={handleChange}
                      className="px-3 py-2 border bg-blueLight border-blue outline-none rounded-md text-blue"
                    />
                  ) : (
                    <p className="font-medium text-blue">
                      {editableData[key] || "-"}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Photo Section */}
          <figure
            className=" w-full h-72 flex flex-col items-center justify-center gap-3 py-3"
            aria-label="Foto Profil"
          >
            {avatar ? (
              <img
                src={avatar}
                alt="Foto Profil"
                className="w-full h-full rounded-2xl object-cover border-2 border-red"
              />
            ) : (
              <div className=" border-2 border-red w-full h-full flex items-center justify-center rounded-2xl">
                <CircleUser size={34} color="#8c2b02" />
              </div>
            )}

            {isEditing && (
              <div className="flex gap-2">
                <label
                  htmlFor="avatarUpload"
                  className="text-sm text-blue cursor-pointer hover:underline"
                >
                  {avatar ? "Ganti Foto" : "Unggah Foto"}
                </label>
                {avatar && (
                  <button
                    type="button"
                    onClick={handleAvatarDelete}
                    className="text-sm text-red border border-red px-2 cursor-pointer hover:underline"
                  >
                    Hapus Foto
                  </button>
                )}
                <input
                  id="avatarUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </div>
            )}
          </figure>
        </article>

        {/* Action Buttons */}
        <footer className="flex gap-3">
          {isEditing ? (
            <Button
              label="Simpan"
              variant="blue"
              className="py-2.5 w-full"
              onClick={handleSave}
            />
          ) : (
            <Button
              label="Edit"
              variant="yellow"
              className="py-2.5 w-full"
              onClick={() => setIsEditing(true)}
            />
          )}
        </footer>
      </section>
    </main>
  );
}
