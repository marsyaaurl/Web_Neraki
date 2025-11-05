"use client";

import { X } from "lucide-react";
import Button from "./Button";

export default function DialogChallenge({ onClose }) {
  return (
    <main className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
      <section
        className="relative bg-white flex flex-col py-6 px-8 md:px-10 rounded-3xl w-11/12 max-w-lg gap-6  shadow-xl"
        aria-label="Formulir Post Baru"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup dialog"
          className="absolute top-4 right-4 text-red-700 hover:text-red-900 transition-colors"
        >
          <X size={28} color="#8c2b02" />
        </button>

        {/* Header */}
        <header className="text-center">
          <h2 className="text-3xl font-bold text-blue">New Post</h2>
        </header>

        {/* Form */}
        <form className="flex flex-col gap-5" aria-label="Form Post Baru">
          {/* Upload Area */}
          <div className="bg-yellowLightHover h-60 rounded-xl flex items-end justify-start border border-yellow">
            <label htmlFor="upload" className="sr-only">
              Unggah Gambar
            </label>
            <input
              id="upload"
              type="file"
              className="text-sm text-blue"
              aria-label="Unggah gambar"
            />
          </div>

          {/* Caption Input */}
          <div className="flex flex-col gap-1">
            <label htmlFor="caption" className="sr-only">
              Keterangan
            </label>
            <textarea
              id="caption"
              type="text"
              rows={6}
              placeholder="Tambahkan keterangan..."
              className=" border-2 border-x-blueLight py-3 px-3 outline-none  w-full rounded-md  placeholder:text-blueHover text-blue"
              aria-label="Tambahkan keterangan"
            />
          </div>

          {/* Submit Button */}
          <footer>
            <Button
              label="Bagikan"
              variant="blue"
              className="py-2.5 px-3 w-full"
              onClick={onClose}
            />
          </footer>
        </form>
      </section>
    </main>
  );
}

{
  /*"use client";

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
}*/
}
