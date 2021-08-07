import { useState } from 'react';
import './App.css';

// const peaceSongsLists = ['a', 'b', 'c']
// const joySongsList = ['x', 'y', 'z']
// const energySongsLists = ['d', 'e', 'f']

const bhajans = {
  peaceSongsLists: [
    'a',
    'b',
    'c'
  ],
  joySongsList: [
    'x',
    'y',
    'z'
  ],
  energySongsLists: [
    'd',
    'e',
    'f'
  ]
}

function App() {
  let [songs, setSongs] = useState("");

  function peaceHandeler() {

    // console.log("peace");
    let peaceSongs = bhajans.peaceSongsLists;
    // console.log(peaceSongs);
    setSongs(peaceSongs);
    console.log(songs)
  }

  function joyHandeler() {
    console.log("joy");
  }

  function energyHandeler() {
    console.log("energy");
  }

  return (
    <div className="App">
      <h1 className="heading" >My favourite Bhajans</h1>
      <p>listen to my favourite Bhajans. select any catogery below</p>
      <button className="btn" onClick={() => peaceHandeler()} >peace</button>
      <button className="btn" onClick={() => joyHandeler()} >joy</button>
      <button className="btn" onClick={() => energyHandeler()} >energy</button>
      <hr></hr>
      <div>

      </div>
    </div>
  );
}

export default App;
