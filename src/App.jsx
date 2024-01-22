
import './App.css';
import './Row.css';
import './Footer.css';
import './Header.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Row from './Component/Row';
import requests from './Request';
import Row2 from './Component/Row2';
import Row4 from './Component/Row4';
import Banner1 from './Component/Banner1';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner1 title="Top Albums" fetchUrl={requests.fetchTopAlbums}/>
      <Row title="Top Tracks" fetchUrl={requests.fetchTopTracks}/>
      <Row2 title="Top Artists" fetchUrl={requests.fetchTopArtists}/>
      <Row4 title="Top Albums" fetchUrl={requests.fetchTopAlbums}/>
      <Footer/>
    </div>
  );
}

export default App;
