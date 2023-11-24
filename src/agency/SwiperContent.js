import { useState } from "react";
import swiperPic from "../assets/DB/swiperDB";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../assets/Styles/swiperStyles.css";
// import required modules
import { Navigation } from "swiper/modules";

const MainAgency = () => {
  const [data, setData] = useState(swiperPic);
  const path = process.env.PUBLIC_URL;
  return (
    <div className="swiperContentWrapper">
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}>
        {data.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={path + img.image} alt="christmas image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3>Types of clients we want to work</h3>
    </div>
  );
};

export default MainAgency;
