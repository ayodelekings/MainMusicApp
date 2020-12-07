import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';


function Track({tracks}) {
    const [getLyrics, setLyrics] = useState('');

    const [showModal, setModal] = useState (false);
    let clickHandler = (track_id) => {
        const getLyrics = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id}&apikey=4b2cc9c884dafeed362f0876f9fce66e`
   
        
        axios.get(getLyrics).then((res) => (
          setLyrics(res.data.message.body.lyrics.lyrics_body)
        ))
   
      setModal(true)
   
      };
   
      let closeHandler = () => {
        setModal(false)
      };
    return (
        
            <Container>
                <Section>
                    <h2>Specially curated for you...</h2>
                </Section>
                <Row>
                    <Table>
                        <tr>
                            <th>No.</th>
                            <th>Artist</th>
                            <th>Album</th>
                            </tr>
                            
                    {tracks.map((track,index) => (
                        
                            <tr onClick={() => clickHandler(track.track.track_id)}>
                                <td>{index}</td>
                                <td>{track.track.artist_name}</td>
                                <td>{track.track.album_name}</td>
                            </tr>
                        
                    ))}
                     </Table>
                   
                </Row>

                
                { showModal && 
       <Modal>
        {getLyrics}

        <button onClick={closeHandler} className="close">X</button>
      </Modal>
    }

            </Container>
    )
}

export default Track


const Container = styled.div`
   margin: 0 2rem;
`

const Section = styled.div`
    text-align: center;
`

const Row = styled.div`
   
`

const Table = styled.table`
    padding: 8px;
    text-align: center;
    width: 100%;
    position: absolute;

    tr{
        background-color: #f2f2f2;
        
    }
    tr:hover{
        background-color: #ddd;
        cursor: pointer;
    }
    th{
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #A6DEE2;
        color: #664232;
    }
    td{
        text-align: center;
        padding-top: 12px;
        padding-bottom: 12px;
        // border: 1px solid #ddd;
    }
`

const Modal = styled.div`
position: relative;
margin: 1.75rem auto;
border-radius: 10px;
max-width: 500px;
padding: 2rem;
top: 0;
right: 0;
background-color: #A6DEE2;
color: #664232;
line-height: 1.5;

button{
    position: absolute;
    top: 0;
    right: 0;
}
`