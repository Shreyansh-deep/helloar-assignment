import sideIcon from "../assets/side-icon.png";
import sideLogOut from "../assets/side-logout.png";
import "./songPlayer.css";

const SideScreen = () => {
  return (
    <div className="SideScreenBox">
      <div className="TopBoxSet">
        <div className="TopLogoBox">Logo</div>
        <div className="SecondBox">
          <img src={sideIcon} alt="side-button"/>
          <div style={{ marginLeft: "20px" }}>Songs</div>
        </div>
      </div>
      <div className="BottomBox">
        <img src={sideLogOut} alt="logout-button"/>
        <div style={{ marginLeft: "15px" }}>Logout</div>
      </div>
    </div>
  );
};
export default SideScreen;
