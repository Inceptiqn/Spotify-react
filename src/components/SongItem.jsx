import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ title, cover, artist, id }) => {

  const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={() => playWithId(id)} className="w-48 min-w-48 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="w-44 h-44 rounded object-cover" src={cover} alt="" />
      <p className="font-bold mt-2 mb-1">{title}</p>
      <p className="text-slate-200 text-sm">{artist}</p>
    </div>
  );
};

export default SongItem;
