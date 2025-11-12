"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function UmkmList({ umkmData = [] }) {
  const [selectedUmkm, setSelectedUmkm] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleOpen = (item) => {
    setSelectedUmkm(item);
    setIsOpen(true);
    setIsFlipped(false);
  };

  const handleClose = () => {
    setSelectedUmkm(null);
    setIsOpen(false);
    setIsFlipped(false);
  };

  return (
    <div className="flex-1">
      {umkmData.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {umkmData.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-fit cursor-pointer"
              onClick={() => handleOpen(item)}
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden pt-5 pb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />

                {/* Location Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span className="text-[10px] font-medium text-gray-700 hidden sm:inline">
                    {item.shortloc}
                  </span>
                  <span className="text-xs font-medium text-gray-700 sm:hidden">
                    {item.shortloc.split(",")[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col gap-2.5">
                {/* Name and Owner */}
                <div>
                  <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-tight truncate">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5 truncate">
                    {item.owner}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="bg-blue text-yellow px-2.5 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                  <span className="bg-yellow text-blue px-2.5 py-1 rounded-full text-xs font-medium">
                    {item.priceRange || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-500 text-lg">Tidak ada UMKM yang sesuai dengan filter</p>
          <p className="text-gray-400 text-sm mt-2">Coba ubah filter untuk melihat hasil lainnya</p>
        </div>
      )}

      {/* MODAL / DIALOG */}
      {isOpen && selectedUmkm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div 
            className="relative max-w-4xl w-full"
            style={{ perspective: "1000px" }}
          >
            <div
              className={`relative transition-transform duration-700 ${
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT SIDE */}
              <div
                className="relative bg-white rounded-3xl p-6 md:p-10 shadow-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-bold text-2xl text-blue">{selectedUmkm.name}</h2>
                    <p className="text-blue/80 text-sm">{selectedUmkm.owner}</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Left: Image */}
                  <div className="relative w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={selectedUmkm.image}
                      alt={selectedUmkm.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right: Info */}
                  <div className="flex flex-col justify-between w-full md:w-1/2">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Description</h3>
                      <p className="text-sm leading-relaxed mb-4">
                        {selectedUmkm.description || "No description available."}
                      </p>

                      <div className="flex flex-row gap-x-2">
                        <MapPin size={20}/>
                        <h4 className="font-semibold text-md mb-1">{selectedUmkm.shortloc}</h4>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{selectedUmkm.location}</p>

                      {/* Category & Price */}
                      <div className="flex gap-2 flex-wrap mb-4">
                        <span className="bg-blue text-yellow font-medium px-3 py-1 rounded-full text-sm">
                          {selectedUmkm.category}
                        </span>
                        <span className="bg-yellow text-blue font-medium px-3 py-1 rounded-full text-sm">
                          {selectedUmkm.priceRange || "Price N/A"}
                        </span>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col gap-3 mt-4">
                        <div className="flex gap-3">
                          <div className="bg-green-500 rounded-xl w-fit flex flex-row gap-x-2 justify-center items-center px-5 hover:bg-green-200">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-lg" />
                            <a
                              href={`https://wa.me/${selectedUmkm.contact.whatsapp}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white font-semibold py-2 w-full text-center"
                            >
                              Whatsapp
                            </a>
                          </div>
                          <div className="bg-pink-500 rounded-xl w-fit flex flex-row gap-x-2 justify-center items-center px-5 hover:bg-pink-200">
                            <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
                            <a
                              href={`https://instagram.com/${selectedUmkm.contact.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white font-semibold py-2 w-full text-center"
                            >
                              Instagram
                            </a>
                          </div>
                        </div>
                        <button className="bg-blue text-yellow font-semibold py-2 rounded-xl hover:bg-blue/60" onClick={() => setIsFlipped(true)}>
                          Flip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                className="absolute inset-0 bg-white rounded-3xl p-6 md:p-10 shadow-xl overflow-y-auto"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-bold text-2xl text-blue">{selectedUmkm.name}</h2>
                    <p className="text-blue/80 text-sm">Backstory</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                  >
                    ×
                  </button>
                </div>

                {/* Backstory */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Behind The Brand</h3>
                  <p className="text-sm leading-relaxed">
                    {selectedUmkm.backStory || "No backstory available."}
                  </p>
                </div>

                {/* Gallery */}
                {selectedUmkm.photos && selectedUmkm.photos.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">Gallery</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4">
                      {selectedUmkm.photos.map((photo, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-64 h-48 rounded-xl overflow-hidden"
                        >
                          <Image
                            src={photo}
                            alt={`${selectedUmkm.name} gallery ${index + 1}`}
                            width={256}
                            height={192}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Flip Back Button */}
                <button
                  className="w-full bg-blue text-yellow font-semibold py-2 rounded-xl hover:bg-blue/60"
                  onClick={() => setIsFlipped(false)}
                >
                  Back to Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}