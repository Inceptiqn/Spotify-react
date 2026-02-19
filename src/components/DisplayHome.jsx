import React, { useContext } from "react";
import NavBar from "./NavBar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { albums, songs, isLoading, error } = useContext(PlayerContext);

  if (isLoading) {
    return (
      <>
        <NavBar />
        <div className="mt-10 text-center">
          <p className="text-white text-xl">Loading music...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <div className="mt-10 text-center">
          <p className="text-red-500 text-xl">{error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albums.map((item) => (
            <AlbumItem
              key={item.id}
              title={item.title}
              artist={item.owner}
              id={item.id}
              cover={item.cover}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songs.map((item) => {
            const album = albums.find((album) => album.id === item.albumId);
            const cover = album ? album.cover : null;

            return (
              <SongItem
                key={item.id}
                title={item.title}
                artist={item.artist}
                id={item.id}
                cover={cover}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
