import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header';
import Track from './components/Track';
import Footer from './components/Footer';

function App() {
  const [tracks, setTracks] = useState([]);


  useEffect(() => {


    const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=4b2cc9c884dafeed362f0876f9fce66e'

      axios.get(API_URL).then((res) => (
        setTracks(res.data.message.body.track_list)
       
      ))

      
  }, [])
  return (
    <div className="App">
      <Header />
       <Track tracks={tracks}/>
       <Footer />
      
    </div>
  );
}

export default App;
