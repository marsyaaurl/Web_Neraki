"use client";
import Image from 'next/image';
import NasiKokoh from '../../public/assets/images/NasiKokoh.jpg';
import HakaDimsum from '../../public/assets/images/HakaDimsum.jpg';

export default function UmkmList() {
    const umkm = [
        {
            image: NasiKokoh,
            name: "Nasi Kokoh",
            owner: "Kokoh Kembar",
            category: "Makanan",
            location: "Blok M Mall Lantai Basement Blok B no 11, RT.3/RW.1, Melawai, Kebayoran Baru, South Jakarta City, Jakarta 12160",
        },
        {
            image: HakaDimsum,
            name: "Haka Dimsum",
            owner: "Kenny Pranata",
            category: "Makanan",
            location: "Jl. Sultan Hasanuddin Dalam No.3, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
            {umkm.map((umkm) => (
                <div key={umkm.name} className="relative w-72 h-72">

                    <Image 
                        src={umkm.image}
                        alt={umkm.name}
                        className="w-full h-40 object-cover rounded-2xl"
                    />

                    <div className="p-3 flex flex-col justify-between h-[calc(100%-10rem)] gap-y-2">
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <h3 className="text-blue font-semibold text-lg text-left">{umkm.name}</h3>
                                <h4 className="text-blue font-normal text-sm text-left">{umkm.owner}</h4>
                            </div>
                            <p className='font-semibold bg-yellow text-blue px-3 py-2 rounded-full w-fit'>{umkm.category}</p>
                        </div>
                        <p className="text-gray-600 text-sm text-left line-clamp-3">{umkm.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
