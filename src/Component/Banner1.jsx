import React, { useEffect, useState } from 'react';
import axiosinstance from '../Instance';
import Carousel from 'react-bootstrap/Carousel';

function Banner1({ title, fetchUrl }) {
   console.log(title);
   console.log('albumurl',fetchUrl);
  const [music, setMusic] = useState([]);
function rnum()
{
 return Math.floor(Math.random() * 7) + 7;
}
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

    <div className="row">
<Carousel data-bs-theme="dark" style={{marginTop:"100px"}}>
        {
        music.slice(15, 18).map((info) => (

<Carousel.Item style={{width:"100%",height:"330px"}}>
  <div className="row d-flex mt-5">

    <div className="col-2">
    <img
  className="d-block"
  src={music[rnum()].image[3]['#text']}
  alt="First slide"
  style={{width:"100%",height:"260px",objectFit:"cover",borderRadius:"20px",marginTop:"10px",marginBottom:"10px"}}
/>
    </div>
     
    <div className="col-8">
      
    <img
  className="d-block"
  src={music[rnum()].image[3]['#text']}
  alt="First slide"
  style={{width:"100%",height:"260px",objectFit:"cover",borderRadius:"20px",marginTop:"10px",marginBottom:"10px"}}
/>

    </div>
   
    <div className="col-2">
    <img
  className="d-block"
  src={music[rnum()].image[3]['#text']}
  alt="First slide"
  style={{width:"100%",height:"260px",objectFit:"co",borderRadius:"20px",marginTop:"10px",marginBottom:"10px"}}
/>
    </div>
    
  </div>


</Carousel.Item>

  ))
}

      
    </Carousel>


    </div>
    
    


  );
}

export default Banner1;


