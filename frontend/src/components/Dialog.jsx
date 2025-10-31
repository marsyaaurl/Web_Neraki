"use client";

import { CircleUser } from "lucide-react";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function Dialog() {
  const [profileData, setProfileData] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({});

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

  return (
    <main className=" fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
      <div className=" bg-white mx-8 md:mx-10 w-full lg:w-1/2 p-10 rounded-3xl  flex flex-col gap-7 justify-center mt-20 shadow-lg">
        <div className=" flex justify-center">
          <h2 className="text-4xl font-bold text-blue">Your Profile</h2>
        </div>

        {/*DATA & PHOTO */}
        <div className="flex flex-wrap-reverse justify-center lg:flex-nowrap lg:justify-between gap-5">
          {/*DATA */}
          <div className=" w-full">
            <div className=" flex flex-col gap-3">
              {profileData.map(({label, key}, index) => (
                <div key={index} className=" flex flex-col gap-1">
                  <label className="text-blue text-sm">{label}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name={key}
                      value={editableData[key] || ""}
                      onChange={handleChange}
                      className="px-3 py-2 border bg-blueLight border-blue outline-none rounded-md text-blue"
                    />
                  ) : (
                    <p className="font-medium text-blue ">
                      {editableData[key] || "-"}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/*PHOTO */}

          <div className=" border-2 border-red rounded-2xl w-full h-72 flex items-center justify-center py-3">
            <CircleUser size={34} color="#8c2b02" />
          </div>
        </div>
        <div className=" flex gap-3">
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
              className=" py-2.5 w-full"
              onClick={() => setIsEditing(true)}
            />
          )}
        </div>
      </div>
    </main>
  );
}
