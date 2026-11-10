import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Sparkles, Check, RefreshCw } from 'lucide-react';
import { QUIZ_QUESTIONS, KOMBU_FLAVORS } from './kombuData';

export default function KombuQuizModal({
  isOpen,
  onClose,
  onSelectFlavor,
  onShowToast
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [matchedFlavor, setMatchedFlavor] = useState(null);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentStep];
  const totalSteps = QUIZ_QUESTIONS.length;

  const handleSelectOption = (option) => {
    const updatedAnswers = {
      ...answers,
      [currentQ.id]: option.flavorId
    };
    setAnswers(updatedAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate match (tally occurrences or pick most frequent)
      const tallies = {};
      Object.values(updatedAnswers).forEach(fid => {
        tallies[fid] = (tallies[fid] || 0) + 1;
      });
      let bestFlavorId = 'ginger-turmeric';
      let maxCount = -1;
      for (const [fid, count] of Object.entries(tallies)) {
        if (count > maxCount) {
          maxCount = count;
          bestFlavorId = fid;
        }
      }
      const match = KOMBU_FLAVORS.find(f => f.id === bestFlavorId) || KOMBU_FLAVORS[0];
      setMatchedFlavor(match);
      onShowToast?.(`✨ Recommended match: ${match.name}`);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setMatchedFlavor(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#EDE4D8] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-[#EBE4DA] flex items-center justify-between bg-white/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8C3A12]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C3A12] uppercase font-sans">
              HOLISTIC MICROBIOME MATCHMAKER
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Quiz"
            className="p-1.5 rounded-full hover:bg-[#EFE8DD] text-[#4A3D34] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (if not finished) */}
        {!matchedFlavor && (
          <div className="w-full bg-[#EDE7DD] h-1.5">
            <div 
              className="bg-[#8C3A12] h-full transition-all duration-300 ease-out"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {matchedFlavor ? (
            /* Result Screen */
            <div className="text-center space-y-5 py-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF2E8] border border-[#CFE2CC] text-[#2F5E36] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Ideal Microbiome Pairing</span>
              </div>

              <div className="relative w-32 h-36 mx-auto rounded-2xl overflow-hidden bg-[#ECE6DC] border border-[#DFD6C9] shadow-md">
                <img
                  src={matchedFlavor.heroImage}
                  alt={matchedFlavor.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=300&q=80";
                  }}
                />
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-sm bg-[#8C3A12] text-white text-[9px] font-bold uppercase">
                  {matchedFlavor.awardBadge}
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-serif font-bold text-[#231710]">
                  {matchedFlavor.name}
                </h3>
                <p className="text-xs text-[#8C3A12] font-semibold tracking-wide">
                  {matchedFlavor.oakAging} • {matchedFlavor.cfu}
                </p>
                <p className="text-xs md:text-sm text-[#65574D] max-w-sm mx-auto leading-relaxed pt-1">
                  {matchedFlavor.extendedDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => {
                    onSelectFlavor(matchedFlavor.id);
                    onClose();
                  }}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#853813] hover:bg-[#702F10] active:scale-[0.98] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Explore {matchedFlavor.name} Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-1.5 text-xs text-[#7A6D63] hover:text-[#231710] font-medium transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retake Lifestyle Quiz</span>
                </button>
              </div>
            </div>
          ) : (
            /* Question Step */
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#8C3A12] uppercase tracking-wider">
                  Question {currentStep + 1} of {totalSteps}
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#231710] leading-snug">
                  {currentQ.question}
                </h3>
                <p className="text-xs text-[#7F7167]">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options List */}
              <div className="space-y-2.5">
                {currentQ.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                    className="w-full p-3.5 rounded-2xl bg-white border border-[#EBE3D7] hover:border-[#8C3A12] hover:bg-[#FFFDFB] text-left transition-all group flex items-start gap-3 shadow-2xs cursor-pointer active:scale-[0.99]"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#EDE7DD] flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                      {option.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-[#231710] group-hover:text-[#8C3A12] transition-colors">
                        {option.title}
                      </div>
                      <div className="text-xs text-[#6F6157] leading-relaxed mt-0.5">
                        {option.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Back navigation */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A6D63] hover:text-[#231710] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Question</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
