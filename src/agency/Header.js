import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

const Header = ({ agencyStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>로고</h1>
      <div onClick={handleClick} className={agencyStyle.headerToggle}>
        <span></span>
        사이드메뉴
      </div>
      {/* <div
        className={`${agencyStyle.menuContainer} ${
          menuOpen ? agencyStyle.open : ""
        }`}>     
        <HeaderMenu agencyStyle={agencyStyle} />*/}
      {menuOpen && <HeaderMenu agencyStyle={agencyStyle} />}
    </header>
  );
};
export default Header;
