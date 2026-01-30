import React from "react";
import NavBar from "./NavBar";
import { SONGS, ALBUMS } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {ALBUMS.map((item, index) => (
            <AlbumItem
              key={index}
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
          {SONGS.map((item, index) => {
            const album = ALBUMS.find((album) => album.id === item.albumId);
            const cover = album ? album.cover : null;

            return (
              <SongItem
                key={index}
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
