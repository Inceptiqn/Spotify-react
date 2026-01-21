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

  const currentSongIndex = 0; // You can make this dynamic later

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
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={UI.shuffle} alt="" />
          <img className="w-4 cursor-pointer" src={UI.previous} alt="" />
          <img className="w-4 cursor-pointer" src={UI.pause} alt="" />
          <img className="w-4 cursor-pointer" src={UI.nextIcon} alt="" />
          <img className="w-4 cursor-pointer" src={UI.shuffle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Player;
