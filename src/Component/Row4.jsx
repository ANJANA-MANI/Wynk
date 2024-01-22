import React, { useEffect, useState } from 'react';
import axiosinstance from '../Instance';

function Row4({ title, fetchUrl }) {
   console.log(title);
   console.log('albumurl',fetchUrl);
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  const fetchData = async () => {
    try {
      console.log('Fetching data from:', fetchUrl);
      const response = await axiosinstance.get(fetchUrl);
      setMusic(response.data.albums.album|| []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  console.log('album', music);
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
{music.slice(0, 14).map((info) => (
  <div className="song" key={info.name + info.artist.name}>
    {/* Display the information as needed with additional checks */}
    {info &&  info.image[3] ? (
      <img
        src={info.image[3]['#text']}
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

export default Row4;
