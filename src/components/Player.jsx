import React from "react";
import Sidebar from "./Sidebar";
import { UI, SONGS, ALBUMS } from "../assets/assets";

const Player = () => {
  // Helper function to get album cover for a song
  const getSongAlbumCover = (songIndex) => {
    const song = SONGS[songIndex];
    if (!song) return null;

    const album = ALBUMS.find((album) => album.id === song.albumId);
    return album ? album.cover : null;
  };

  const currentSongIndex = 1;

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-12"
          src={getSongAlbumCover(currentSongIndex)}
          alt={SONGS[currentSongIndex]?.title || ""}
        />
        <div>
          <p>{SONGS[currentSongIndex]?.title}</p>
          <p>{SONGS[currentSongIndex]?.artist}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto translate-x-13">
        <div className="flex gap-3 items-center mt-3">
          <button className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500 hover:text-white">
            <svg
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-current"
            >
              <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" />
              <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500 hover:text-white">
            <svg
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-current"
            >
              <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7z" />
            </svg>
          </button>
          <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
            <svg
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-current"
            >
              <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500 hover:text-white">
            <svg
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-current"
            >
              <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center cursor-pointer text-gray-500 hover:text-white">
            <svg
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="w-4 h-4 fill-current"
            >
              <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75z" />
            </svg>
          </button>
        </div>
        <div className="flex  items-center gap-3">
          <p className="text-xs text-gray-400">1:06</p>
          <div className="w-[70vw] max-w-150 bg-gray-500 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-72 bg-white hover:bg-[#1db954] rounded-full" />
          </div>
          <p className="text-xs text-gray-400">3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4 opacity-75">
        <svg
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="w-4 h-4 fill-current cursor-pointer hover:fill-white"
        >
          <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797M10.5 8.118l-2.619-2.62L4.74 9.075 2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045z" />
        </svg>
        <svg
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="w-4 h-4 fill-current cursor-pointer hover:fill-white"
        >
          <path d="M15 15H1v-1.5h14zm0-4.5H1V9h14zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5m2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z" />
        </svg>
        <svg
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="w-4 h-4 fill-current cursor-pointer hover:fill-white"
        >
          <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5zM4 15H2v-1.5h2z" />
        </svg>
        <svg
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          className="w-4 h-4 fill-current cursor-pointer hover:fill-white"
        >
          <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.64 3.64 0 0 1-1.33-4.967 3.64 3.64 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.14 2.14 0 0 0 0 3.7l5.8 3.35V2.8zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88" />
        </svg>
        <div className="w-20 bg-slate-50 h-1 rounded "></div>
        <img className="w-4" src={UI.addToPlaylist} alt="" />
        <img className="w-4" src={UI.addToPlaylist} alt="" />
      </div>
    </div>
  );
};

export default Player;
