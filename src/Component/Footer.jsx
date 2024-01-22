import React, { useEffect, useState } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import axiosinstance from '../Instance';
import { RampRight } from '@mui/icons-material';
const api_key='443c383242ff82da3130cf668dd8c89c';
function Footer() {

 const fetchUrl='/?method=chart.gettoptags&api_key=443c383242ff82da3130cf668dd8c89c&format=json';
 const fetchUrl1='http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=443c383242ff82da3130cf668dd8c89c&format=json&format=json';
 const fetchUrl2=`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${api_key}&format=json`
 const fetchUrl3=`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=${api_key}&format=json`;

 const [music, setMusic] = useState([]);
 const[album,setAlbum]=useState([]);
 const[all,setAll]=useState([]);
 const[track,setTrack]=useState([]);

  useEffect(() => {
    fetchData();
    fetchData1()
    fetchData2()
    fetchData3()
  }, [fetchUrl]);

  

  const fetchData = async () => {
    try {
      console.log('Fetching data from:', fetchUrl);
      const response = await axiosinstance.get(fetchUrl);
      setMusic(response.data.tags.tag || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData1 = async () => {
    try {
      console.log('Fetching data from:', fetchUrl1);
      const response = await axiosinstance.get(fetchUrl1);
      
      setAlbum(response.data.toptracks.track || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData2 = async () => {
    try {
      console.log('Fetching data from:', fetchUrl2);
      const response = await axiosinstance.get(fetchUrl2);
      setAll(response.data.artists.artist||[]);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData3= async () => {
    try {
      console.log('Fetching data from:', fetchUrl3);
      const response = await axiosinstance.get(fetchUrl3);
      setTrack(response.data.albums.album||[]);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
console.log("footer data-All",track);

  return (
    
    <MDBFooter className='text-center mt-5 w-100' color='white' bgColor='rgba(12,15,18,0.5)'>
      
      
      <section className=' appdiv mb-4 w-100 '>
          <div className=" logo w-100 app d-flex p-2" style={{backgroundColor:'#131313'}}>
            <div className="col-2">
            <img
              src='https://wynk.in/assets/icons/icon-192x192.png'
              height='50'
              width='70'
              alt=''
              loading='lazy'
             margin='10px'
            />
            </div>
            <div className="col-4">
            <p className=""><h4>Best way to Listen to Music!</h4>
            <h6>Don’t forget to install Wynk Music on your mobile phones</h6></p>
            </div>
            <div className="col-2"></div>
            <div className="app col-2">
              <a href="">
                <img src="https://assets.stickpng.com/thumbs/5a902dbf7f96951c82922875.png" />
              </a>
            </div>
            <div className=" app col-2">
            <a href="">
                <img src="app.png" alt=""/>
              </a>
           
            </div>
          
            
          </div>
        </section>
      <MDBContainer className='p-4'>


        

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              
        <h5 className='text-uppercase'>Top Tags</h5>
         <p style={{textAlign:"justify",padding:"5px",color:"lightgrey"}}>
         {music.slice(0,41).map((info) => (
 
 <a href='/' className='text-center me-1 'style={{color:"#5D6D7E "}}>
    {info.name} |
 </a>

))}
          </p>     
  

            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Popular Tracks</h5>
              <p style={{textAlign:"justify",padding:"5px",color:"lightgrey"}}>
         {album.slice(0,21).map((info) => (
 
 <a href='/' className='text-center me-1 'style={{color:"#5D6D7E "}}>
    {info.name} |
 </a>

))}
          </p> 
             
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>ARTISTS</h5>
              <p style={{textAlign:"justify",padding:"5px",color:"lightgrey"}}>
         {all.slice(0,34).map((info) => (
 
 <a href='/' className='text-center me-1 'style={{color:"#5D6D7E "}}>
    {info.name} |
 </a>

))}
          </p> 
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>ALBUMS</h5>
              <p style={{textAlign:"justify",padding:"5px",color:"lightgrey"}}>
         {track.slice(0,18).map((info) => (
 
 <a href='/' className='text-center me-1 'style={{color:"#5D6D7E "}}>
    {info.name} |
 </a>

))}
</p>
            </MDBCol>
          </MDBRow>
        </section>
        <hr></hr>
        <section className='mb-4'>
          <div className="row">
            <div className="col-8 d-flex text-white" >
              <a href="" style={{margin:'4px',color:'white',textAlign:"center"}}>ABOUT US |</a>
              <a href="" style={{margin:'4px',color:'white',textAlign:"center"}}>PRIVACY POLICY |</a>
              <a href="" style={{margin:'4px',color:'white',textAlign:"center"}}>TERMS OF USE |</a>
              <a href="" style={{margin:'4px',color:'white',textAlign:"center"}}>CONTACT US |</a> 
             <a href="" style={{margin:'4px',color:'white',textAlign:"center"}}>HELLOTUNES</a>
              
             
              
            </div>
            <div className="col-4">
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
            </div>
          </div>
         
        </section>
        <hr></hr>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          WynkMusik.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer