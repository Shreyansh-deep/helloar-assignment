import { Button } from "@mui/material";
import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import "./addSong.css";

const AddSong = ({ setAddSong, setSongName, setSongSource, setSongLink, handleArrayChange }) => {
  const nameRef = useRef("");
  const sourceRef = useRef("");
  const linkRef = useRef("");

  return (
    <div>
      <div className="overlay"></div>
      <div className="add-song-main">
        <div className="add-song-row">
          <p>Add Song</p>
          <RxCross2 onClick={() => setAddSong(false)} cursor="pointer" />
        </div>
        <div className="add-song-inputs">
          <p>Song Name</p>
          <input
            placeholder="Song Name"
            type="text"
            style={{ width: "100%" }}
            onChange={(e) => setSongName(e.target.value)}
          />
          <p>Song Link</p>
          <input
            placeholder="URL"
            type="link"
            style={{ width: "100%" }}
            onChange={(e) => setSongLink(e.target.value)}
          />
          <p>Song Source</p>
          <input
            placeholder="Source Name"
            type="text"
            style={{ width: "100%" }}
            onChange={(e) => setSongSource(e.target.value)}
          />
          <input type="file" style={{ marginTop: 20 }} />
          <p>
            Image has to be of aspect ration 1:1 with a size of 3000 pixel x
            3000 pixels
          </p>
        </div>
        <div className="add-song-button">
          <Button variant="outlined" onClick={() => setAddSong(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => { handleArrayChange();  setAddSong(false);}}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default AddSong;
