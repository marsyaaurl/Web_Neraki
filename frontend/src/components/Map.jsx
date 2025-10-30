"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NasiKokoh from "../../public/assets/images/NasiKokoh.jpg";
import HakaDimsum from "../../public/assets/images/HakaDimsum.jpg";
import SateTaichanBangYoyo from "../../public/assets/images/SateTaichanBangYoyo.jpg";

export default function MapCarousel() {
  const places = [
    {
      embededLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.152448844111!2d106.7970911731676!3d-6.243630961133253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1006c242c77%3A0x99768d0b4834241!2sNasi%20Kokoh%20Edisi%20Blok%20M!5e0!3m2!1sen!2sid!4v1761618549122!5m2!1sen!2sid",
      image: NasiKokoh,
      name: "Nasi Kokoh",
      location: "Blok M Mall Lantai Basement Blok B no 11, RT.3/RW.1, Melawai, Kebayoran Baru, South Jakarta City, Jakarta 12160",
    },
    {
      embededLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1501192395995!2d106.79603647316767!3d-6.243938561136096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e977079bd5%3A0x36d0e803f05aac71!2sHAKA%20Dimsum%20Blok%20M!5e0!3m2!1sen!2sid!4v1761623491489!5m2!1sen!2sid",
      image: HakaDimsum,
      name: "Haka Dimsum",
      location: "Jl. Sultan Hasanuddin Dalam No.3, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
    },
    {
      embededLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2344958791878!2d106.84806527316744!3d-6.232787861033628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f31be298d6dd%3A0xd20c08206d3c0e8a!2sSate%20Taichan%20BANG%20YOYO!5e0!3m2!1sen!2sid!4v1761701917263!5m2!1sen!2sid",
      image: SateTaichanBangYoyo,
      name: "Sate Taichan Bang Yoyo",
      location: "Jl. Tebet Barat Raya No.52 12, RT.6/RW.7, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? places.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === places.length - 1 ? 0 : prev + 1));
  };

  const currentPlace = places[currentIndex];

  return (
    <div className="relative w-full mx-auto">
      {/* Google Map */}
      <iframe
        src={currentPlace.embededLink}
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] rounded-xl"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
      <div>
        
      </div>

      {/* Floating Card */}
      <div className="absolute flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-2 bottom-4 right-4 bg-white backdrop-blur-sm shadow-md rounded-xl p-3 md:p-5 w-48 h-56 sm:h-48 md:h-72 lg:h-96 sm:w-56 md:w-72 lg:w-80">
        <Image
          src={currentPlace.image}
          alt={currentPlace.name}
          className="rounded-lg w-full h-24 sm:h-28 md:h-40 lg:h-48 object-cover"
        />
        <div className="mt-1.5 md:mt- flex flex-col gap-y-0 sm:gap-y-1 md:gap-y-1">
          <h1 className="font-semibold text-xs sm:text-base md:text-lg">
            {currentPlace.name}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            {currentPlace.location}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white shadow rounded-full p-2"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white shadow rounded-full p-2"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
