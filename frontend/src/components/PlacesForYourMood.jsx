"use client";

import { useState } from "react";
import Image from "next/image";
import Mascot from "../../public/assets/images/CharacterNeraki1.png";
import { umkm, questions } from "../app/data/umkm.js";

export default function PlacesForYourMood() {
  const [isClicked, setIsClicked] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: ""
  });
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    const { q1, q2, q3 } = answers;
    
    // Filter UMKM based on mood matching
    const scored = umkm.map(place => {
      let score = 0;
      
      // Check energy match
      if (place.mood.energy.includes(q1)) score += 3;
      
      // Check vibe match
      if (place.mood.vibe.includes(q2)) score += 3;
      
      // Check setting match
      if (place.mood.setting.includes(q3) || q3 === "both") score += 2;
      
      return { ...place, score };
    });
    
    // Sort by score and get top 3
    const topPlaces = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(place => ({
        name: place.name,
        desc: `${place.category} • ${place.shortloc}`,
        image: place.image,
        location: place.location
      }));
    
    setRecommendations(topPlaces);
    setStep(2);
  };

  const handleAnswerSelect = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isAllAnswered = answers.q1 && answers.q2 && answers.q3;

  const resetDialog = () => {
    setIsClicked(false);
    setStep(1);
    setAnswers({ q1: "", q2: "", q3: "" });
    setRecommendations([]);
  };

  return (
    <>
      <div 
        className="relative w-full md:w-1/3 h-auto cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsClicked(true)}
      >
        <div className="bg-blueLight rounded-2xl w-full p-6 pb-0 relative overflow-hidden border-l-8 border-blue">
          <h1 className="text-blue font-bold text-2xl mb-1 relative z-10">
            Places For Your Mood
          </h1>
          <p className="text-blue text-lg mb-4 relative z-10">
            Temukan tempat untuk suasana hatimu hari ini!
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
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {step === 1 ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-blue">How are you feeling today?</h2>
                  <button 
                    onClick={resetDialog}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-8">
                  {questions.map((q, index) => (
                    <div key={q.id}>
                      <h3 className="text-xl font-semibold text-blue mb-4">
                        {index + 1}. {q.question}
                      </h3>
                      <div className="space-y-3">
                        {q.options.map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              answers[q.id] === option.value
                                ? "border-blue bg-blueLight"
                                : "border-gray-200 hover:border-blue/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={option.value}
                              checked={answers[q.id] === option.value}
                              onChange={(e) => handleAnswerSelect(q.id, e.target.value)}
                              className="mr-3 w-5 h-5 accent-blue"
                            />
                            <span className="text-gray-700 text-lg">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={getRecommendations}
                  disabled={!isAllAnswered}
                  className={`mt-8 w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                    isAllAnswered
                      ? "bg-blue text-white hover:bg-blue/90"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Get Recommendations
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-blue">Perfect Places For You!</h2>
                  <button 
                    onClick={resetDialog}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-600 mb-6 text-lg">
                  Based on your mood, here are our top recommendations:
                </p>

                <div className="space-y-4">
                  {recommendations.map((place, index) => (
                    <div
                      key={index}
                      className="p-6 bg-blueLight rounded-xl border-l-4 border-blue hover:shadow-lg transition-shadow"
                    >
                      {place.image && (
                        <Image 
                          src={place.image} 
                          alt={place.name}
                          className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                      )}
                      <h3 className="text-xl font-bold text-blue mb-2">
                        {index + 1}. {place.name}
                      </h3>
                      <p className="text-gray-600">{place.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-lg font-semibold text-lg border-2 border-blue text-blue hover:bg-blueLight transition-all"
                  >
                    Retake Quiz
                  </button>
                  <button
                    onClick={resetDialog}
                    className="flex-1 py-4 rounded-lg font-semibold text-lg bg-blue text-white hover:bg-blue/90 transition-all"
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