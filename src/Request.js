const API_KEY="443c383242ff82da3130cf668dd8c89c";
const artist="";
const track="";
const requests = {

fetchTopTracks: `/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
  fetchTopArtists: `/?
method=chart.gettopartists&api_key=${API_KEY}&format=json`,
  fetchTopTags: `/?method=chart.gettoptags&api_key=${API_KEY}&format=json`,
  fetchTopAlbums: `/?method=tag.gettopalbums&tag=disco&api_key=${API_KEY}&format=json`,
  fetchTrackInfo: `/?method=track.getInfo&api_key=${API_KEY}&artist=${artist}&track=${track}&format=json`,
  fetchArtistInfo: (artist) =>
    `/?method=artist.getInfo&api_key=${API_KEY}&artist=${artist}&format=json`,
  searchTracks: (track) =>
    `/?method=track.search&api_key=${API_KEY}&track=${track}&format=json`,


    }
    
      
      

    export default requests;