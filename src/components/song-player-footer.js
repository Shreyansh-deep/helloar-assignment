import { useState, useEffect } from "react";
import useSound from "use-sound";
import sampleSong from "./song/sample.mp3";
import songImage from "../assets/song-image.png";
import "./songPlayer.css";
import previous from "../assets/previous.png";
import next from "../assets/next.png";
import { AiOutlinePause } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const SongPlayerFooter = ({ currentSongName }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(sampleSong);
  const [, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);
  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };
  return (
    <div className="SongPlayerFooterBox">
      <input
        id="songPlayerRange"
        type="range"
        min="0"
        max={duration / 1000}
        default="0"
        value={seconds}
        className="timeline"
        onChange={(e) => {
          sound.seek([e.target.value]);
        }}
      />
      <div className="SongDetailBox">
        <img src={songImage} alt=""/>
        <div className="ControlButton">
          <img src={previous} alt=""/>
          <div
            onClick={() => {
              playingButton();
            }}
            style={{ marginTop: "5px" }}
          >
            {isPlaying ? (
              <IconContext.Provider value={{ size: "25px" }}>
                <AiOutlinePause />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ size: "25px" }}>
                <BsFillPlayFill />
              </IconContext.Provider>
            )}
          </div>
          <img src={next} alt=""/>
        </div>
      </div>
    </div>
  );
};
export default SongPlayerFooter;
