import NasiKokoh from "../../../public/assets/images/NasiKokoh.jpg";
import HakaDimsum from "../../../public/assets/images/HakaDimsum.jpg";
import MacksCreamery from "../../../public/assets/MacksCreamery.jpeg";
import SateTaichanBangYoyo from "../../../public/assets/images/SateTaichanBangYoyo.jpg";

export const umkm = [
    {
      image: NasiKokoh,
      name: "Nasi Kokoh",
      owner: "Kokoh Kembar",
      category: "Makanan",
      shortloc: "Blok M Mall, Jakarta Selatan",
      location: "Blok M Mall Lantai Basement Blok B no 11, RT.3/RW.1, Melawai, Kebayoran Baru, South Jakarta City, Jakarta 12160",
      priceRange: "",
      mood: {
        energy: ["medium", "high"],
        vibe: ["social", "creative"],
        setting: ["indoor"]
      },
      tags: ["comfort-food", "casual", "hearty"]
    },
    {
      image: HakaDimsum,
      name: "Haka Dimsum",
      owner: "Kenny Pranata",
      category: "Makanan",
      shortloc: "Melawai, Jakarta Selatan",
      location: "Jl. Sultan Hasanuddin Dalam No.3, RT.3/RW.1, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
      priceRange: "",
      mood: {
        energy: ["medium", "high"],
        vibe: ["social"],
        setting: ["indoor"]
      },
      tags: ["light-bites", "social", "casual"]
    },
    {
      image: MacksCreamery,
      name: "Mack's Creamery",
      owner: "Mike Tjakra",
      category: "Makanan",
      shortloc: "Melawai, Jakarta Selatan",
      location: "Jl. Melawai 3 No.10, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
      priceRange: "",
      mood: {
        energy: ["low", "medium"],
        vibe: ["peaceful", "creative"],
        setting: ["indoor"]
      },
      tags: ["sweet", "relaxing", "dessert"]
    },
    {
      image: SateTaichanBangYoyo,
      name: "Sate Taichan Bang Yoyo",
      owner: "John Afifi",
      category: "Makanan",
      shortloc: "Tebet, Jakarta Selatan",
      location: "Jl. Tebet Barat Raya No.52 12, RT.6/RW.7, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810",
      priceRange: "",
      mood: {
        energy: ["medium", "high"],
        vibe: ["social", "creative"],
        setting: ["indoor", "outdoor"]
      },
      tags: ["spicy", "casual", "street-food"]
    },
  ];

export const questions = [
    {
      id: "q1",
      question: "How's your energy level today?",
      options: [
        { value: "high", label: "High - I'm ready to explore!" },
        { value: "medium", label: "Medium - Feeling balanced" },
        { value: "low", label: "Low - Need something relaxing" }
      ]
    },
    {
      id: "q2",
      question: "What kind of vibe are you looking for?",
      options: [
        { value: "social", label: "Social - Want to meet people" },
        { value: "peaceful", label: "Peaceful - Need some quiet time" },
        { value: "creative", label: "Creative - Looking for inspiration" }
      ]
    },
    {
      id: "q3",
      question: "Indoor or outdoor?",
      options: [
        { value: "indoor", label: "Indoor - Cozy spaces" },
        { value: "outdoor", label: "Outdoor - Fresh air" },
        { value: "both", label: "No preference" }
      ]
    }
];