import { createContext, useEffect, useRef, useState } from "react";
import { fetchAlbums, fetchSongs } from "../services/pocketbase";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [track, setTrack] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
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
      if (audioRef.current.src !== track.file) {
        audioRef.current.src = track.file;
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
    const song = songs.find((song) => song.id === id);
    if (song) {
      setTrack(song);
      if (song.file && song.file !== "") {
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.src = song.file;
            audioRef.current.load();
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

      const albumSongs = songs
        .filter((song) => song.albumId === track.albumId)
        .sort((a, b) => (a.track || 0) - (b.track || 0));

      const currentIndex = albumSongs.findIndex((song) => song.id === track.id);
      if (currentIndex > 0) {
        const prevSong = albumSongs[currentIndex - 1];
        setTrack(prevSong);
        if (prevSong.file && prevSong.file !== "") {
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.src = prevSong.file;
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

      const albumSongs = songs
        .filter((song) => song.albumId === track.albumId)
        .sort((a, b) => (a.track || 0) - (b.track || 0));

      const currentIndex = albumSongs.findIndex((song) => song.id === track.id);
      if (currentIndex > -1 && currentIndex < albumSongs.length - 1) {
        const nextSong = albumSongs[currentIndex + 1];
        setTrack(nextSong);
        if (nextSong.file && nextSong.file !== "") {
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.src = nextSong.file;
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
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [loadedAlbums, loadedSongs] = await Promise.all([
          fetchAlbums(),
          fetchSongs(),
        ]);

        setAlbums(loadedAlbums);
        setSongs(loadedSongs);

        if (loadedSongs.length > 0) {
          setTrack(loadedSongs[0]);
        }
      } catch (err) {
        console.error("Error loading music data:", err);
        setError(err.message || "Failed to load music data");
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (seekBar.current && audio.duration) {
        const progress = Math.floor((audio.currentTime / audio.duration) * 100);
        seekBar.current.style.width = progress + "%";
      }
      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60) || 0,
          minute: Math.floor(audio.currentTime / 60) || 0,
        },
        totalTime: {
          second: Math.floor(audio.duration % 60) || 0,
          minute: Math.floor(audio.duration / 60) || 0,
        },
      });
    };

    audio.ontimeupdate = handleTimeUpdate;

    return () => {
      audio.ontimeupdate = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && track?.file && track.file !== "") {
      if (audioRef.current.src !== track.file) {
        audioRef.current.src = track.file;
        audioRef.current.load();
      }
    }
  }, [track]);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    songs,
    albums,
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
    isLoading,
    error,
    showPremiumModal,
    setShowPremiumModal,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
