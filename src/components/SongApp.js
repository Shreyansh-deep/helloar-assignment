import SideScreen from "./side-screen";
import MainScreen from "./main-screen";
import "./songPlayer.css";
import AddSong from "./AddSong";
import { useState } from "react";

const songArray = [
  {
    type: "title",
    songName: "Song Name",
    source: "Source",
    addedOn: "Added On",
  },
  { songName: "Song Name A", source: "Youtube", addedOn: "17/06/2021" },
  { songName: "Song Name B", source: "Youtube", addedOn: "17/06/2021" },
  { songName: "Song Name C", source: "Youtube", addedOn: "17/06/2021" },
  { songName: "Song Name D", source: "Youtube", addedOn: "17/06/2021" },
  { songName: "Song Name E", source: "Youtube", addedOn: "17/06/2021" },
  { songName: "Song Name F", source: "Youtube", addedOn: "17/06/2021" },
  { songName: "Song Name G", source: "Youtube", addedOn: "17/06/2021" },
];

function SongApp() {

  const [addSong, setAddSong] = useState(false)
  const [songName, setSongName] = useState("")
  const [, setSongLink] = useState("")
  const [songSource, setSongSource] = useState("")
  const [array, setArray] = useState(songArray)


  const handleArrayChange = () => {
    // console.log("aaaaaaaaaaaa")
    const newArray = [...array]
    newArray.push({songName: songName, source: songSource, addedOn: "17/06/2021"})
    setArray(newArray)
  }
  // console.log(array,"HHHHHHHHHHHHHH")
  return (
    <div className="SongAppBox">
      <SideScreen />
      <MainScreen setAddSong={setAddSong} songArray={array}/>
      {addSong && <AddSong setAddSong={setAddSong} setSongName={setSongName} setSongLink={setSongLink} setSongSource={setSongSource} handleArrayChange={handleArrayChange}/>}
    </div>
  );
}

export default SongApp;
