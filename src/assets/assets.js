import about from './ui/About.png'
import addToPlaylist from './ui/Add to playlist.png'
import addToQueue from './ui/Add to queue.png'
import connectToDevice from './ui/Connect to a device.png'
import fullScreen from './ui/Full screen.png'
import goToRadio from './ui/Go to radio.png'
import hideSong from './ui/Hide song.png'
import like from './ui/Like.png'
import lyrics from './ui/Lyrics.png'
import nextIcon from './ui/Next.png'
import pause from './ui/Pause.png'
import previous from './ui/Previous.png'
import queueIcon from './ui/Queue.png'
import repeatIcon from './ui/Repeat.png'
import reportAbuse from './ui/Report abuse.png'
import share from './ui/Share.png'
import shuffle from './ui/Shuffle.png'
import sleepTimer from './ui/Sleep timer.png'
import songCredits from './ui/Song credits.png'
import viewAlbum from './ui/View album.png'
import viewArtist from './ui/View artist.png'
import volume from './ui/Volume.png'

// Album cover imports
import liveLoveAsapCover from './albums/live_love_asap.jpg'
import longLiveAsapCover from './albums/long_live_asap.png'
import allaCover from './albums/alla.png'
import testingCover from './albums/testing.png'
import dontBeDumbCover from './albums/dont_be_dumb.png'

// grouped export of raw UI assets
export const UI = {
  about,
  addToPlaylist,
  addToQueue,
  connectToDevice,
  fullScreen,
  goToRadio,
  hideSong,
  like,
  lyrics,
  nextIcon,
  pause,
  previous,
  queueIcon,
  repeatIcon,
  reportAbuse,
  share,
  shuffle,
  sleepTimer,
  songCredits,
  viewAlbum,
  viewArtist,
  volume,
}

// Simple album / playlist objects for the home screen
export const ALBUMS = [
  {
    id: 'album-1',
    type: 'album',
    title: 'Live. Love. ASAP',
    owner: 'A$AP Rocky',
    cover: liveLoveAsapCover,
    items: 15,
    color: '#7BD389',
  },
  {
    id: 'album-2',
    type: 'album',
    title: 'Long. Live. ASAP',
    owner: 'A$AP Rocky',
    cover: longLiveAsapCover,
    items: 17,
    color: '#61D3D6',
  },
  {
    id: 'album-3',
    type: 'album',
    title: 'At. Long. Last. ASAP',
    owner: 'A$AP Rocky',
    cover: allaCover,
    items: 18,
    color: '#D77BFF',
  },
  {
    id: 'album-4',
    type: 'album',
    title: "TESTING",
    owner: 'A$AP Rocky',
    cover: testingCover,
    items: 15,
    color: '#7AA2FF',
  },
  {
    id: 'album-5',
    type: 'album',
    title: "Don't Be Dumb",
    owner: 'A$AP Rocky',
    cover: dontBeDumbCover,
    items: 18,
    color: '#7AA2FF',
  },
]

// Song objects; each references an albumId from ALBUMS
export const SONGS = [
  { id: 's1', title: 'Order of Protection', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 1 },
  { id: 's2', title: 'Helicopter', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 2 },
  { id: 's3', title: 'Interrogation (Skit)', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 3 },
  { id: 's4', title: 'Stole Ya Flow', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 4 },
  { id: 's5', title: 'Stay Here', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 5 },
  { id: 's6', title: 'Playa', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 6 },
  { id: 's7', title: 'Trespass', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 7 },
  { id: 's8', title: 'Stop Snitching', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 8 },
  { id: 's9', title: 'STFU', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 9 },
  { id: 's10', title: 'Punk Rocky', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 10 },
  { id: 's11', title: 'Air Force (Black Demarco)', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 11 },
  { id: 's12', title: 'Whiskey (Release Me)', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 12 },
  { id: 's13', title: 'Robbery', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 13 },
  { id: 's14', title: 'Don’t Be Dumb / Trip Baby', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 14 },
  { id: 's15', title: 'The End', artist: 'A$AP Rocky', albumId: 'album-5', duration: 0, track: 15 },
];


export default { UI, ALBUMS, SONGS }