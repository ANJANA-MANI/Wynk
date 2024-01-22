import React, { useEffect, useState } from 'react';
import axiosinstance from '../Instance';

function Row({ title, fetchUrl }) {
  const [music, setMusic] = useState([]);
  const [musicInfo, setMusicInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const fetchData = async () => {
    try {
      console.log('Fetching data from:', fetchUrl);
      const response = await axiosinstance.get(fetchUrl);
      setMusic(response.data.tracks.track || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch track information when music array changes
    const fetchTrackInfoForAll = async () => {
      try {
        const promises = music.map((track) =>
          fetchTrackInfo(track.artist.name, track.name)
        );
        const infoDataArray = await Promise.all(promises);
        setMusicInfo(infoDataArray);
      } catch (error) {
        console.error('Error fetching track info:', error);
      }
    };

    if (music.length > 0) {
      fetchTrackInfoForAll();
    }
  }, [music]);

  const fetchTrackInfo = async (artistName, trackName) => {
    const fetchinfoUrl = `/?method=track.getInfo&api_key=443c383242ff82da3130cf668dd8c89c&artist=${artistName}&track=${trackName}&format=json`;

    try {
      const response = await axiosinstance.get(fetchinfoUrl);
      return response.data.track;
    } catch (error) {
      console.error('Error fetching track info:', error);
      return null; // Return null in case of an error
    }
  };

  //console.log('MUSIC', music);
  //console.log('MUSICinfo', musicInfo);

  return (
    <div className='row mt-5'>
        <div className="row">
        <div className="col-4">
        <h1 style={{ color: 'whitesmoke' }}>{title}</h1>
        </div>
       
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-2"></div>
        <div className="col-2">
            <button className=''>More</button>
            </div>
            </div>
  

  <div className="songs-row">
    {musicInfo.slice(0, 14).map((info) => (
      <div className="song" key={info.name + info.artist.name}>
        {/* Display the information as needed with additional checks */}
        {info.album && info.album.image && info.album.image[3] ? (
          <img
            src={info.album.image[3]['#text']}
            alt=""
          />
        ) : (
          <img
            src="https://storage.googleapis.com/loudest-news-photo/news-photo/16541.Untitled-design-(44).jpg"
            
          />
        )}
      
        <h5 style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        {info.name}
       </h5>
        <h6>{info.artist.name}</h6>
      </div>
    ))}
  </div>
</div>

  );
}

export default Row;
