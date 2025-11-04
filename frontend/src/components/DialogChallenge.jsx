"use client";

import { X } from "lucide-react";
import Button from "./Button";

export default function DialogChallenge({ onClose }) {
  return (
    <main className=" fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
      <div className=" bg-white flex flex-col py-6 px-10 rounded-3xl h-auto w-3/4 lg:w-2/5 gap-3">
        <div className=" flex flex-col gap-1">
          <div className=" flex justify-end">
            <X
              size={30}
              color="#8c2b02"
              onClick={onClose}
              className=" cursor-pointer"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className=" text-3xl font-bold text-blue ">New Post</h2>
          </div>
        </div>

        <div className=" flex justify-center w-full flex-col gap-3">
          <div className=" flex bg-yellowLightHover h-60 items-end rounded-lg">
            <input type="file" className=" text-sm" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Tambahkan keterangan..."
              className=" outline-none py-3 placeholder:text-blueHover w-full"
            />
          </div>

          <Button
            label="Bagikan"
            variant="blue"
            className="py-2.5 px-3 w-full"
            onClick={onClose}
          />
        </div>
      </div>
    </main>
  );
}
