const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
  for (const playlistKey in library.playlists) {
    const playlist = library.playlists[playlistKey];
    const numOfTracks = playlist.tracks.length;
    console.log(`${playlist.id}: ${playlist.name} - ${numOfTracks} tracks`);
  }
};
printPlaylists();
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
  for (const trackKey in library.tracks) {
    const track = library.tracks[trackKey];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`
    );
  }
};
printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       const tracks = library.playlists[playlistId].tracks
       console.log(`${playlistId} ${library.playlists[playlistId].name} - ${tracks.length} tracks`)
       tracks.forEach(x=>console.log(`${x}: ${library.tracks[x].name} by ${library.tracks[x].artist} (${library.tracks[x].album})`)) 
   }
   printPlaylist("p01")
// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
       library.playlists[playlistId].tracks.push((trackId))
       console.log(library.playlists)
};
addTrackToPlaylist("t69", "p01")

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = function (name, artist, album) {
       let x = generateUid();
       library.tracks[x] = {};
       library.tracks[x].id = generateUid();
       library.tracks[x].name = name;
       library.tracks[x].artist = artist;
       library.tracks[x].album = album;

       console.log(library.tracks)
};
addTrack("Light", "House", "Labs");

// adds a playlist to the library
const addPlaylist = function (name) {
  let x = generateUid();
  let id = generateUid();
  let tracks = Math.round(Math.random()*100);
  library.playlists[x] = {};
  library.playlists[x].name = name
  library.playlists[x].id = id
  library.playlists[x].tracks =`p: ${tracks}`

  console.log(library.playlists)
};
addPlaylist("Andy")

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {};