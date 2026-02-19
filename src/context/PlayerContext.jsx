import { createContext, useEffect, useRef, useState } from "react";
import { SONGS } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(SONGS[19]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    if (audioRef.current && track?.file) {
      // Ensure absolute path for audio src
      if (!audioRef.current.src.includes(track.file)) {
        audioRef.current.src = "/" + track.file;
        audioRef.current.load();
      }
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = (id) => {
    const song = SONGS.find((song) => song.id === id);
    if (song) {
      setTrack(song);
      if (song.file && song.file !== "") {
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.src = "/" + song.file; // Use absolute path
            audioRef.current.load(); // Force reload with new source
            audioRef.current.play().catch((error) => {
              console.error("Error playing audio:", error);
            });
            setPlayStatus(true);
          }
        }, 100);
      } else {
        console.log("No audio file available for:", song.title);
        setPlayStatus(false);
      }
    }
  };

  const previous = () => {
    if (track) {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlayStatus(false);
      }

      const currentIndex = SONGS.findIndex((song) => song.id === track.id);
      if (currentIndex > 0) {
        const prevSong = SONGS[currentIndex - 1];
        setTrack(prevSong);
        if (prevSong.file && prevSong.file !== "") {
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.src = "/" + prevSong.file;
              audioRef.current.load();
              audioRef.current.play().catch((error) => {
                console.error("Error playing audio:", error);
              });
              setPlayStatus(true);
            }
          }, 100);
        } else {
          setPlayStatus(false);
        }
      }
    }
  };

  const next = () => {
    if (track) {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlayStatus(false);
      }

      const currentIndex = SONGS.findIndex((song) => song.id === track.id);
      if (currentIndex < SONGS.length - 1) {
        const nextSong = SONGS[currentIndex + 1];
        setTrack(nextSong);
        if (nextSong.file && nextSong.file !== "") {
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.src = "/" + nextSong.file;
              audioRef.current.load();
              audioRef.current.play().catch((error) => {
                console.error("Error playing audio:", error);
              });
              setPlayStatus(true);
            }
          }, 100);
        } else {
          setPlayStatus(false);
        }
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        if (seekBar.current && audioRef.current.duration) {
          const progress = Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100,
          );
          seekBar.current.style.width = progress + "%";
        }
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  // Reload audio when track changes
  useEffect(() => {
    if (audioRef.current && track?.file && track.file !== "") {
      audioRef.current.load();
    }
  }, [track]);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
