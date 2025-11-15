"use client";
import { useState } from "react";

export default function Filter({ 
  selectedCategories = [], 
  setSelectedCategories = () => {}, 
  selectedLocation = [], 
  setSelectedLocation = () => {},
  filteredCount = 0
}) {
  const [isOpen, setIsOpen] = useState(false);

  const category = ["Makanan", "Pakaian", "Elektronik", "Craft", "Kosmetik"];
  const location = ["Jakarta", "Bekasi"];

  const toggleCategory = (item) => {
    setSelectedCategories(prev => 
      prev.includes(item) ? prev.filter(c => c !== item) : [...prev, item]
    );
  };

  const toggleLocation = (item) => {
    setSelectedLocation(prev => 
      prev.includes(item) ? prev.filter(p => p !== item) : [...prev, item]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedLocation([]);
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
          {(selectedCategories.length > 0 || selectedLocation.length > 0) && (
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
              {selectedCategories.length + selectedLocation.length}
            </span>
          )}
        </button>

        {/* Bottom Sheet */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl pl-5 py-6">
              <div className="text-center mb-5">
                <h2 className="font-bold text-xl text-blue">Filter</h2>
              </div>
              <div className="mb-6 pr-32">
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

              {/* Lokasi */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 text-sm mb-3 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1 h-4 bg-blue rounded-full"></span>
                  Lokasi
                </h3>
                <div className="flex flex-col gap-2">
                  {location.map((item, index) => (
                    <label 
                      key={index} 
                      className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all group"
                    >
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 accent-blue-600"
                        checked={selectedLocation.includes(item)}
                        onChange={() => toggleLocation(item)}
                      />
                      <span className={`ml-3 text-sm ${selectedLocation.includes(item) ? 'font-semibold text-blue-600' : 'text-gray-700 group-hover:text-gray-900'}`}>
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <div className="flex px-10 justify-between w-full gap-x-10">
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 text-sm text-blue border-2 hover:bg-blue-50 font-semibold rounded-lg transition-all"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 text-sm text-white bg-blue hover:bg-blue/50 font-semibold rounded-lg transition-all"
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

          {/* Lokasi */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 text-sm mb-3 uppercase tracking-wide flex items-center gap-2">
              <span className="w-1 h-4 bg-blue rounded-full"></span>
              Lokasi
            </h3>
            <div className="flex flex-col gap-2">
              {location.map((item, index) => (
                <label 
                  key={index} 
                  className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all group"
                >
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 accent-blue-600"
                    checked={selectedLocation.includes(item)}
                    onChange={() => toggleLocation(item)}
                  />
                  <span className={`ml-3 text-sm ${selectedLocation.includes(item) ? 'font-semibold text-blue-600' : 'text-gray-700 group-hover:text-gray-900'}`}>
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