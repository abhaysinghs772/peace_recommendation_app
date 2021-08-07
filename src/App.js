import { useState } from 'react';
import './App.css';

const bhajans = {
  "peace": [
    'Sri Damodarashtakam',
    'Narayana Kavacha'
  ],
  "joy": [
    'Sri Ramchandra Kripalu Bhajanan',
    'Achutam Keshavam'
  ],
  "energy": [
    'Shri Hari Stotram'
  ]
}
let bhajansGenres = Object.keys(bhajans);
// console.log(bhajansGenres);

function App() {

  let [songsList, setSongs] = useState("");

  function clickHandeler(index) {
    console.log("clicked", index);
    let userInput = bhajans[bhajansGenres[index]];
    // console.log(userInput);
    setSongs(userInput);

    // console.log(songsList);
  }
  
  return (
    <div className="App">
      <h1 className="heading" >My favourite Bhajans and Sanskrit Songs</h1>
      <p>listen to my favourite Bhajans. select any catogery below</p>
      {
        bhajansGenres.map((genre, index) => {
          return (<button className="btn" onClick={() => clickHandeler(index)}>{genre}</button>)
        })
      }
      <hr></hr>
      <div>
        <ul style= {{paddingLeft: "5px"}} >
          {
            // line 52 stack overflow 
            // https://stackoverflow.com/questions/62105820/typeerror-songs-map-is-not-a-function
            songsList && songsList.map((index) => {
              return (<li className="songsList" >{index}</li>)
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;