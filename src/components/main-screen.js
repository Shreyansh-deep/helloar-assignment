import { useState } from "react";
import songImage from "../assets/song-image.png";
import circularPlay from "../assets/circular-play.png";
import deleteImage from "../assets/delete-image.png";
import SongPlayerFooterBox from "./song-player-footer";
import "./songPlayer.css";
import { Button } from "@mui/material";

const MainScreen = ({setAddSong, songArray}) => {
  const [currentSongName, setCurrentSongName] = useState("");
 console.log(songArray,"HHHHHHHHHHHHHHHHHHHHHHHH")
  return (
    <div className="MainBox">
      <div className="UperMainBox">
        <div className="UpperTitleBox">
          <div
            style={{
              color: "black",
              paddingLeft: "20px",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            {" "}
            Songs
          </div>
          <Button variant="contained" className="AddSongButton" onClick={() => setAddSong(true)}>Add Songs</Button>
        </div>
        <div className="SongOptionPannel">
          {songArray.map((obj, key) => {
            return (
              <div
                className="IndividualSongBox"
                onClick={() => {
                  setCurrentSongName(obj.songName);
                }}
              >
                <div className="SongNameBox">
                  {!obj.type ? <img src={songImage} alt="song-image"/> : <div />}
                  <div style={{ marginLeft: "45px" }}>{obj.songName}</div>
                </div>
                <div className="Text">{obj.source}</div>
                <div className="Text">{obj.addedOn}</div>
                {!obj.type ? <img src={circularPlay} alt="play-button"/> : <div />}
                {!obj.type ? <img src={deleteImage} alt="delete-image"/> : <div />}
              </div>
            );
          })}
        </div>
      </div>
      <SongPlayerFooterBox currentSongName={currentSongName} />
    </div>
  );
};
export default MainScreen;
