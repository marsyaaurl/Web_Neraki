"use client";
import { useState } from "react";

export default function Filter({ 
  selectedCategories = [], 
  setSelectedCategories = () => {}, 
  selectedPrices = [], 
  setSelectedPrices = () => {},
  filteredCount = 0
}) {
  const [isOpen, setIsOpen] = useState(false);

  const category = ["Makanan", "Pakaian", "Elektronik", "Craft"];
  const priceRange = ["Rp 0 - 50.000", "Rp 50.000 - 100.000", "Rp 100.000+"];

  const toggleCategory = (item) => {
    setSelectedCategories(prev => 
      prev.includes(item) ? prev.filter(c => c !== item) : [...prev, item]
    );
  };

  const togglePrice = (item) => {
    setSelectedPrices(prev => 
      prev.includes(item) ? prev.filter(p => p !== item) : [...prev, item]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
  };

  return (
    <>
      {/* Mobile Button */}
      <div className="block lg:hidden w-full mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-white border border-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          Filter
          {(selectedCategories.length > 0 || selectedPrices.length > 0) && (
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
              {selectedCategories.length + selectedPrices.length}
            </span>
          )}
        </button>

        {/* Bottom Sheet */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsOpen(false)}
            ></div>

            <div className="relative bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto shadow-2xl animate-slide-up">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b">
                <div>
                  <h2 className="font-bold text-blue text-xl">Filter</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {filteredCount} hasil ditemukan
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Kategori</h3>
                <div className="flex flex-col gap-2">
                  {category.map((item, index) => (
                    <label 
                      key={index} 
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                        selectedCategories.includes(item)
                          ? 'bg-blue-50 ring-2 ring-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 accent-blue-600"
                        checked={selectedCategories.includes(item)}
                        onChange={() => toggleCategory(item)}
                      />
                      <span className={`ml-3 text-sm ${selectedCategories.includes(item) ? 'font-semibold text-blue-700' : 'text-gray-700'}`}>
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Harga</h3>
                <div className="flex flex-col gap-2">
                  {priceRange.map((item, index) => (
                    <label 
                      key={index} 
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                        selectedPrices.includes(item)
                          ? 'bg-blue-50 ring-2 ring-blue-500'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 accent-blue-600"
                        checked={selectedPrices.includes(item)}
                        onChange={() => togglePrice(item)}
                      />
                      <span className={`ml-3 text-sm ${selectedPrices.includes(item) ? 'font-semibold text-blue-700' : 'text-gray-700'}`}>
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  className="flex-1 py-3 font-semibold rounded-lg border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
                  onClick={resetFilters}
                >
                  Reset
                </button>
                <button
                  className="flex-1 py-3 font-semibold rounded-lg border-2 bg-blue text-white hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Terapkan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Filter Sidebar */}
      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
          {/* Header */}
          <div className="mb-6 pb-5 border-b border-gray-100">
            <h2 className="font-bold text-blue text-xl">Filter</h2>
            <p className="text-sm text-gray-500 mt-1">
              {filteredCount} hasil ditemukan
            </p>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 text-sm mb-3 uppercase tracking-wide flex items-center gap-2">
              <span className="w-1 h-4 bg-blue rounded-full"></span>
              Kategori
            </h3>
            <div className="flex flex-col gap-2">
              {category.map((item, index) => (
                <label 
                  key={index} 
                  className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all group"
                >
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 accent-blue-600"
                    checked={selectedCategories.includes(item)}
                    onChange={() => toggleCategory(item)}
                  />
                  <span className={`ml-3 text-sm ${selectedCategories.includes(item) ? 'font-semibold text-blue-600' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 text-sm mb-3 uppercase tracking-wide flex items-center gap-2">
              <span className="w-1 h-4 bg-blue rounded-full"></span>
              Harga
            </h3>
            <div className="flex flex-col gap-2">
              {priceRange.map((item, index) => (
                <label 
                  key={index} 
                  className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all group"
                >
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 accent-blue-600"
                    checked={selectedPrices.includes(item)}
                    onChange={() => togglePrice(item)}
                  />
                  <span className={`ml-3 text-sm ${selectedPrices.includes(item) ? 'font-semibold text-blue-600' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="w-full py-2.5 text-sm text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all"
          >
            Reset Semua
          </button>
        </div>
      </div>

      {/* Slide Animation */}
      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.25s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        }
      `}</style>
    </>
  );
}