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
      console.log("Attempting to play:", track.title, "file:", track.file);
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
        console.log("Current audio src:", audioRef.current.src);
        console.log("Audio readyState:", audioRef.current.readyState);
      });
      setPlayStatus(true);
    } else {
      console.log("Cannot play - no audio file or ref:", track?.title);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = (id) => {
    const song = SONGS.find(song => song.id === id);
    console.log("playWithId called with:", id, "found song:", song);
    if (song) {
      setTrack(song);
      if (song.file && song.file !== "") {
        console.log("Song has file:", song.file);
        setTimeout(() => {
          if (audioRef.current) {
            const playAudio = () => {
              console.log("Audio ready to play, src:", audioRef.current.src);
              audioRef.current.play().catch((error) => {
                console.error("Error playing audio:", error);
                console.log("Audio src when error:", audioRef.current.src);
              });
              setPlayStatus(true);
              audioRef.current.removeEventListener('canplay', playAudio);
              audioRef.current.removeEventListener('error', audioError);
            };
            
            const audioError = (e) => {
              console.error("Audio loading error:", e);
              console.log("Error details:", audioRef.current.error);
              console.log("Attempted src:", audioRef.current.src);
              audioRef.current.removeEventListener('canplay', playAudio);
              audioRef.current.removeEventListener('error', audioError);
            };
            
            // Set the src directly and then load
            audioRef.current.src = "/" + song.file; // Add leading slash for absolute path
            audioRef.current.addEventListener('canplay', playAudio);
            audioRef.current.addEventListener('error', audioError);
            audioRef.current.load();
            console.log("Audio load called, src set to:", "/" + song.file);
            
            // Add timeout fallback
            setTimeout(() => {
              if (audioRef.current.readyState === 0) {
                console.log("Audio still not loaded after 3 seconds, readyState:", audioRef.current.readyState);
              }
            }, 3000);
          }
        }, 100);
      } else {
        console.log("No audio file available for:", song.title);
        setPlayStatus(false);
      }
    }
  }


  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        if (seekBar.current && audioRef.current.duration) {
          const progress = Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100);
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
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
