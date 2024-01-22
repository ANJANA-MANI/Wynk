import React, { useEffect, useState } from 'react';
import axiosinstance from '../Instance';
import images from '../Images';


const API_KEY="443c383242ff82da3130cf668dd8c89c";

function Row2({ title, fetchUrl }) {
    console.log(title,fetchUrl);
  const [music, setMusic] = useState([]);
  const [musicInfo, setMusicInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const fetchData = async () => {
    try {
      console.log('Fetching data from:', fetchUrl);
      const response = await axiosinstance.get(fetchUrl);
      setMusic(response.data.artists.artist|| []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch track information when music array changes
    const fetchTrackInfoForAll = async () => {
      try {
        const promises = music.map((i) =>
          fetchTrackInfo(i.name)
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

  const fetchTrackInfo = async (artistName) => {
    const fetchinfoUrl = `/?method=artist.getInfo&api_key=${API_KEY}&artist=${artistName}&format=json`;
    
   // console.log('URL',fetchinfoUrl);

    try {
      const response = await axiosinstance.get(fetchinfoUrl);
      return response;
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
        {musicInfo.slice(0, 7).map((info) => (
          <div className="artist" key={info.name}>
            {/* Display the information as needed with additional checks */}
            <img
              src={images[`${info.data.artist.name}`]} // Adjust the index based on the desired image size
              alt={info.data.artist.name}
              style={{  borderRadius: "50%", backgroundColor: 'pink', width: "100px", height: "100px",objectFit:"cover" }}
            />
            <h6 style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',marginTop:"5px",textAlign:"center" }}>
              {info.data.artist.name}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row2;
