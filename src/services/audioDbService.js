// TheAudioDB API service
const API_BASE_URL = 'https://www.theaudiodb.com/api/v1/json/2';
const API_KEY = '2'; // Free test API key

/**
 * Search for albums by artist name
 * @param {string} artistName - The name of the artist
 * @returns {Promise<Array>} Array of album objects
 */
export const searchAlbumsByArtist = async (artistName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/searchalbum.php?s=${encodeURIComponent(artistName)}`);
    const data = await response.json();
    
    if (data.album) {
      return data.album.map(album => ({
        id: album.idAlbum,
        title: album.strAlbum,
        artist: album.strArtist,
        cover: album.strAlbumThumb || album.strAlbumThumbHQ,
        year: album.intYearReleased,
        genre: album.strGenre,
        description: album.strDescriptionEN
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching albums:', error);
    return [];
  }
};

/**
 * Get popular albums by searching for popular artists
 * @returns {Promise<Array>} Array of album objects
 */
export const getPopularAlbums = async () => {
  const popularArtists = ['coldplay', 'ed_sheeran', 'taylor_swift', 'drake', 'ariana_grande'];
  const allAlbums = [];
  
  try {
    for (const artist of popularArtists) {
      const albums = await searchAlbumsByArtist(artist);
      // Take only 2-3 albums per artist to avoid too many results
      allAlbums.push(...albums.slice(0, 2));
      
      // Add delay to respect rate limit (2 calls per second)
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    return allAlbums;
  } catch (error) {
    console.error('Error fetching popular albums:', error);
    return [];
  }
};

/**
 * Get album details by ID
 * @param {string} albumId - The album ID
 * @returns {Promise<Object|null>} Album object or null
 */
export const getAlbumById = async (albumId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/album.php?m=${albumId}`);
    const data = await response.json();
    
    if (data.album && data.album[0]) {
      const album = data.album[0];
      return {
        id: album.idAlbum,
        title: album.strAlbum,
        artist: album.strArtist,
        cover: album.strAlbumThumb || album.strAlbumThumbHQ,
        year: album.intYearReleased,
        genre: album.strGenre,
        description: album.strDescriptionEN
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching album details:', error);
    return null;
  }
};

/**
 * Get all albums for an artist by artist ID
 * @param {string} artistId - The artist ID from TheAudioDB
 * @returns {Promise<Array>} Array of album objects
 */
export const getAlbumsByArtistId = async (artistId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/album.php?i=${artistId}`);
    const data = await response.json();
    
    if (data.album) {
      return data.album.map(album => ({
        id: album.idAlbum,
        title: album.strAlbum,
        artist: album.strArtist,
        cover: album.strAlbumThumb || album.strAlbumThumbHQ,
        year: album.intYearReleased,
        genre: album.strGenre,
        description: album.strDescriptionEN
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching albums by artist ID:', error);
    return [];
  }
};

/**
 * Get Drake's albums specifically (his artist ID is 111718)
 * @returns {Promise<Array>} Array of Drake's albums
 */
export const getDrakeAlbums = async () => {
  return await getAlbumsByArtistId('111718');
};
