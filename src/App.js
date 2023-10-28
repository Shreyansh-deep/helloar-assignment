import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Auth from "./components/Auth";
import SongApp from "./components/SongApp";
import AddSong from "./components/AddSong";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />}/>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/auth/song-app" element={<SongApp />}/>
    </Routes>
  );
}

export default App;
