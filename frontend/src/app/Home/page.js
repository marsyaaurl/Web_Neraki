"use client";

import { useState, useMemo } from "react";
import { umkm } from "../data/umkm.js";
import NavbarLoggedIn from "@/components/NavbarLoggedIn";
import Map from "@/components/Map";
import UmkmList from "@/components/UmkmList";
import Filter from "@/components/Filter";
import PlacesForYourMood from "@/components/PlacesForYourMood";
import Footer from "@/components/FooterLandingPage";
import KitDate from "@/components/KitDate";
import ChallengeCard from "@/components/ChallengeCard";
import { SearchProvider } from "@/components/SearchContext";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";

export default function Home() {
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);


  const filteredData = useMemo(() => {
    return umkm.filter((item) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);

      const priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.includes(item.priceRange);

      return categoryMatch && priceMatch;
    });
  }, [selectedCategories, selectedPrices]);

  return (
    <ProtectedRoute>
      <SearchProvider>
        {/* Navbar */}
        <NavbarLoggedIn />

        {/* Map Section */}
        <div className="pt-24 px-5 flex flex-col gap-y-2">
          <h1 className="text-3xl font-bold text-blue mb-2">
            UMKM Trendy Hari Ini!
          </h1>
          <Map />
        </div>

        {/* Mood + Challenges + Kit Date */}
        <div className="px-5 py-10 flex flex-col gap-y-5 md:flex-row md:gap-x-5">
          <PlacesForYourMood />
          <ChallengeCard />
          <KitDate />
        </div>

        {/* UMKM List + Filter */}
        <div className="px-5 py-20 w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue mb-2">UMKM</h1>
            <h4 className="text-blue font-light text-base sm:text-lg">
              Temukan usaha lokal yang kamu butuhkan!
            </h4>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto">
            <Filter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedPrices={selectedPrices}
              setSelectedPrices={setSelectedPrices}
              filteredCount={filteredData.length}
            />
            <UmkmList umkmData={filteredData} />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </SearchProvider>
    </ProtectedRoute>
  );
}
