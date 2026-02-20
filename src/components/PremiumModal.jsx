import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const PremiumModal = () => {
  const { showPremiumModal, setShowPremiumModal } = useContext(PlayerContext);

  if (!showPremiumModal) return null;

  const handleClose = () => {
    setShowPremiumModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#121212] bg-opacity-95 backdrop-blur-sm border border-gray-600 rounded-lg p-8 max-w-md w-full mx-4 text-white relative pointer-events-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4 text-[#1DB954]">
              Spotify Premium
            </h2>
            <p className="text-gray-300 mb-8">
              Unlock unlimited music with no ads
            </p>
          </div>
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#1DB954] rounded-full shrink-0"></div>
              <span>Ad-free music listening</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#1DB954] rounded-full shrink-0"></div>
              <span>Offline downloads</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#1DB954] rounded-full shrink-0"></div>
              <span>High-quality audio</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#1DB954] rounded-full shrink-0"></div>
              <span>Unlimited skips</span>
            </div>
          </div>
          <div className="bg-[#242424] rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">
                $999999999999999/day
              </div>
              <div className="text-gray-400 text-sm mb-4">Individual Plan</div>
              <div className="text-xs text-gray-500">
                Cancel anytime. Terms and conditions apply.
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-[#1DB954] text-black font-semibold py-3 rounded-full hover:bg-[#1ed760] transition-colors">
              Start Premium
            </button>
            <button
              onClick={handleClose}
              className="w-full text-gray-400 py-2 hover:text-white transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumModal;
