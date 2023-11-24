import { useEffect, useState } from "react";

const Descontent = ({ agencyStyle }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const imageStyle = {
    transform: `translateY(-${Math.min(20, scrollPosition)}px)`,
  };
  const imageStyle2 = {
    transform: `translateY(${Math.min(20, scrollPosition)}px)`,
  };
  return (
    <div>
      <div className={agencyStyle.imgWrapper}>
        <img
          src="images/clipart2718.png"
          alt="tree"
          className={agencyStyle.contentTree}
          style={imageStyle}
        />
        <img
          src="images/clipart1534410.png"
          alt=""
          className={agencyStyle.contentPhone}
          style={imageStyle2}
        />
      </div>
      <p className={agencyStyle.contentDes}>
        Leading digital agency width solid design and development expertise. We
        focus on building Webflow websites
      </p>
    </div>
  );
};
export default Descontent;
