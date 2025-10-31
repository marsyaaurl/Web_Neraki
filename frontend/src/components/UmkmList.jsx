"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";

// tinggal import dari data JSON-mu
import { umkm } from "../app/data/umkm.js";

export default function UmkmList() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {umkm.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-fit"
          >
            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden pt-5 pb-2">
              <Image
                src={item.image}
                alt={item.name}
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
                  {item.priceRange ? `Rp ${item.priceRange}` : "N/A"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
