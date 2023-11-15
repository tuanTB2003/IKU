import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper";

const slideImages = [
  {
    url: "https://nhasachapollo.com/wp-content/uploads/2023/08/1600x500-2_1689565260-1400x438.webp",
  },
  {
    url: "https://nhasachapollo.com/wp-content/uploads/2023/08/slider_1-1400x437.webp",
  },
  {
    url: "https://nhasachapollo.com/wp-content/uploads/2023/08/slider_4-1400x438.webp",
  },
  {
    url: "https://dinhtibooks.com.vn/images/banners/large/1600x500-1_1678414497.webp",
  },
];
const Slider = () => {
  return (
    <section className="banner page-container mb-16 overflow-hidden">
      <Swiper
        grabCursor="true"
        slidesPerView={"auto"}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {slideImages.length > 0 &&
          slideImages.map((item) => (
            <SwiperSlide key={item.url}>
              <img src={item.url} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Slider;
