import Descontent from "./DesContent";
import SwiperContent from "./SwiperContent";
import UpToBtn from "./UpToBtn";
import Header from "./Header";
import agencyStyle from "../assets/Styles/agencyStyle.module.css";

const MainAgency = () => {
  return (
    <div className="mainWrapper">
      <Header agencyStyle={agencyStyle} />
      <div className={agencyStyle.txtWrapper}>
        <h2>
          <span>W</span>e are <br />
          <span>C</span>reative <br />
          <span>A</span>gency
        </h2>
        <p>Working with brands all over the world</p>
      </div>
      <Descontent agencyStyle={agencyStyle} />
      <Descontent agencyStyle={agencyStyle} />
      <SwiperContent />
      <footer>
        ⓒMadeByProymaDesign 2023. Web Design Italy Company. P.lva <br />
        0213080385. All Rights Reserved. Privacy Policy
      </footer>
      <UpToBtn agencyStyle={agencyStyle} />
    </div>
  );
};

export default MainAgency;
