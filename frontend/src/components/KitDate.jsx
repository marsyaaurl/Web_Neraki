"use client";
import Mascot from "../../public/assets/images/CharacterNeraki2.png";
import Image from "next/image";
import { useState } from "react";
import { umkm } from "../app/data/umkm.js";

export default function KitDate() {
  const [isClicked, setIsClicked] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [itinerary, setItinerary] = useState([]);

  const dateTypes = [
    {
      value: "romantic",
      label: "Romantic Date",
      description: "Cozy and intimate vibes",
    },
    {
      value: "adventure",
      label: "Adventure Date",
      description: "Active and exciting activities",
    },
    {
      value: "foodie",
      label: "Foodie Date",
      description: "Culinary exploration",
    },
    {
      value: "chill",
      label: "Chill Date",
      description: "Relaxed and casual hangout",
    }
  ];

  const getItinerary = () => {
    // Filter places yang cocok untuk date type yang dipilih
    const matchingPlaces = umkm.filter(place => 
      place.dateTypes.includes(selectedDate)
    );
    
    let plan = [];
    
    // Morning/Breakfast spot
    const morningSpot = matchingPlaces.find(p => p.mealTime.includes("breakfast")) || matchingPlaces[0];
    
    // Afternoon/Lunch spot
    const afternoonSpot = matchingPlaces.find(p => p.mealTime.includes("lunch")) || matchingPlaces[1];
    
    // Evening/Dinner spot
    const eveningSpot = matchingPlaces.find(p => p.mealTime.includes("dinner")) || matchingPlaces[2];
    
    const reasons = {
      romantic: {
        morning: "Sweet treats to start your romantic day",
        afternoon: "Intimate lunch together",
        evening: "Perfect cozy dinner spot"
      },
      adventure: {
        morning: "Fuel up for your adventure",
        afternoon: "Quick energy boost",
        evening: "Celebrate your adventurous day"
      },
      foodie: {
        morning: "Start with delicious classics",
        afternoon: "Continue the culinary journey",
        evening: "Grand finale for your taste buds"
      },
      chill: {
        morning: "Relaxed and peaceful start",
        afternoon: "Easy-going afternoon vibes",
        evening: "Cozy end to a chill day"
      }
    };
    
    plan = [
      {
        time: "10:00 AM",
        activity: "Morning Start",
        place: morningSpot,
        reason: reasons[selectedDate].morning
      },
      {
        time: "2:00 PM",
        activity: "Afternoon Delight",
        place: afternoonSpot,
        reason: reasons[selectedDate].afternoon
      },
      {
        time: "6:00 PM",
        activity: "Evening Wrap-up",
        place: eveningSpot,
        reason: reasons[selectedDate].evening
      }
    ];
    
    setItinerary(plan);
    setStep(2);
  };

  const resetDialog = () => {
    setIsClicked(false);
    setStep(1);
    setSelectedDate("");
    setItinerary([]);
  };

  return (
    <>
      <div 
        className="relative w-full md:w-1/3 h-auto cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsClicked(true)}
      >
        <div className="bg-[#FFF9DA] rounded-2xl w-full p-6 pb-0 relative overflow-hidden border-l-8 border-yellowHover">
          <h1 className="text-yellowHover font-bold text-2xl mb-1 relative z-10">
            Perfect Kit Date
          </h1>
          <p className="text-yellowHover text-lg mb-4 relative z-10">
            Rencana hari ini dari kami untukmu!
          </p>
  
          <div className="flex justify-end items-end relative z-10">
            <Image
              src={Mascot}
              alt="Mascot"
              className="w-64 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isClicked && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {step === 1 ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-yellowHover">What kind of date?</h2>
                  <button 
                    onClick={resetDialog}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-600 mb-8 text-lg">
                  Pick your vibe and we'll plan the perfect day for you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dateTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedDate === type.value
                          ? "border-yellowHover bg-[#FFF9DA]"
                          : "border-gray-200 hover:border-yellowHover/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="dateType"
                        value={type.value}
                        checked={selectedDate === type.value}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="hidden"
                      />
                      <div className="flex items-start gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {type.label}
                          </h3>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <button
                  onClick={getItinerary}
                  disabled={!selectedDate}
                  className={`mt-8 w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                    selectedDate
                      ? "bg-yellowHover text-white hover:bg-yellowHover/90"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Plan My Perfect Day!
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-yellowHover">Your Perfect Day Itinerary! ✨</h2>
                  <button 
                    onClick={resetDialog}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-600 mb-8 text-lg">
                  We've planned the perfect {dateTypes.find(t => t.value === selectedDate)?.label.toLowerCase()} for you!
                </p>

                <div className="space-y-6">
                  {itinerary.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index < itinerary.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-full bg-yellowHover/30 -z-10" />
                      )}
                      
                      <div className="flex gap-4">
                        {/* Timeline dot */}
                        <div className="flex-shrink-0 w-12 h-12 bg-yellowHover rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 bg-[#FFF9DA] rounded-xl p-6 border-l-4 border-yellowHover">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-yellowHover font-bold text-lg">⏰ {item.time}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-700 font-semibold">{item.activity}</span>
                          </div>
                          
                          {item.place.image && (
                            <Image 
                              src={item.place.image} 
                              alt={item.place.name}
                              className="w-full h-48 object-cover rounded-lg my-4"
                            />
                          )}
                          
                          <h3 className="text-xl font-bold text-yellowHover mb-2">
                            📍 {item.place.name}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {item.place.shortloc}
                          </p>
                          <p className="text-gray-500 italic">
                            💡 {item.reason}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-lg font-semibold text-lg border-2 border-yellowHover text-yellowHover hover:bg-[#FFF9DA] transition-all"
                  >
                    Try Another Date
                  </button>
                  <button
                    onClick={resetDialog}
                    className="flex-1 py-4 rounded-lg font-semibold text-lg bg-yellowHover text-white hover:bg-yellowHover/90 transition-all"
                  >
                    Done
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}