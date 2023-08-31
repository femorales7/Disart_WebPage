import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCards} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-cards';
import { images } from "../../constants";
import "./SlideImages.scss";

const SlideImages = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCards]}
      effect={'cards'}
      className="mySwiper"
      // spaceBetween={50}
      // slidesPerView={3}
      loop={true}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide className="ImagesSlide">
        <img src={images.Batman1} alt="Batman Aquarela" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.Batman2} alt="Batman Aquarela2" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.Hands} alt="Hads of exerience" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.Lucky2} alt="Lucky Dog" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.Hands2} alt="Hads of exerience" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.Lucky} alt="Lucky Dog" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.Hands4} alt="Lucky Dog" />
      </SwiperSlide>
    </Swiper>
  );
};

const SlideMarketing = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCards]}
      effect={'cards'}
      className="mySwiper"
      // spaceBetween={50}
      // slidesPerView={3}
      loop={true}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      
    >
      <SwiperSlide className="ImagesSlide">
        <img src={images.imagen1} alt="Corporative Image" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.imagen2} alt="Brochure" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.imagen3} alt="Logos" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.imagen4} alt="Logos" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.imagen5} alt="Corporative image" />
      </SwiperSlide>
      <SwiperSlide className="ImagesSlide">
        <img src={images.imagen6} alt="Marketing" />
      </SwiperSlide>
      
    </Swiper>
  );
};

export {SlideImages, SlideMarketing};



