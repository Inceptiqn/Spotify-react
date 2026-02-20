import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { setShowPremiumModal } = useContext(PlayerContext);

  const handlePremiumClick = () => {
    setShowPremiumModal(true);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <div
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-black p-2 rounded-full cursor-pointer flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <div
            onClick={() => navigate(1)}
            className="w-10 h-10 bg-black p-2 rounded-full cursor-pointer flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p
            onClick={handlePremiumClick}
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-gray-100 transition-colors"
          >
            Explore Premium
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default NavBar;
