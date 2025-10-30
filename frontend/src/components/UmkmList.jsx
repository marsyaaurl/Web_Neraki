"use client";
import Image from 'next/image';
import NasiKokoh from '../../public/assets/images/NasiKokoh.jpg';
import HakaDimsum from '../../public/assets/images/HakaDimsum.jpg';
import MacksCreamery from '../../public/assets/MacksCreamery.jpeg';
import SateTaichanBangYoyo from '../../public/assets/images/SateTaichanBangYoyo.jpg';
import { MapPin } from 'lucide-react';

export default function UmkmList() {
    const umkm = [
        {
            image: NasiKokoh,
            name: "Nasi Kokoh",
            owner: "Kokoh Kembar",
            category: "Makanan",
            shortloc: "Blok M Mall, Jakarta Selatan",
            location: "Blok M Mall Lantai Basement Blok B no 11, RT.3/RW.1, Melawai, Kebayoran Baru, South Jakarta City, Jakarta 12160",
            priceRange: "",
        },
        {
            image: HakaDimsum,
            name: "Haka Dimsum",
            owner: "Kenny Pranata",
            category: "Makanan",
            shortloc: "Melawai, Jakarta Selatan",
            location: "Jl. Sultan Hasanuddin Dalam No.3, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
            priceRange: "",
        },
        {
            image: MacksCreamery,
            name: "Mack's Creamery",
            owner: "Mike Tjakra",
            category: "Makanan",
            shortloc: "Melawai, Jakarta Selatan",
            location: "Jl. Melawai 3 No.10, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
            priceRange: "",
        },
        {
            image: SateTaichanBangYoyo,
            name: "Sate Taichan Bang Yoyo",
            owner: "John Afifi",
            category: "Makanan",
            shortloc: "Tebet, Jakarta Selatan",
            location: "Jl. Tebet Barat Raya No.52 12, RT.6/RW.7, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810",
            priceRange: "",
        },
    ];

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
                                    {item.shortloc.split(',')[0]}
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
                                    ${item.priceRange}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
