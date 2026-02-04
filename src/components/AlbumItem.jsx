import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ cover, title, artist, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="w-48 min-w-48 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="w-44 h-44 rounded object-cover" src={cover} alt="" />
      <p className="font-bold mt-2 mb-1">{title}</p>
      <p className="text-slate-200 text-sm">{artist}</p>
    </div>
  );
};

export default AlbumItem;
