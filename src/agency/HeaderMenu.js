import { useState } from "react";

const HeaderMenu = ({ agencyStyle }) => {
  const [close, onClose] = useState(true);

  const onExit = (e) => {
    e.preventDefault();
    onClose(false);
  };

  return (
    <>
      {close && (
        <div>
          <a href="#" className={agencyStyle.exitBtn} onClick={onExit}></a>
          <ul className={agencyStyle.menuList}>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">product</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default HeaderMenu;
