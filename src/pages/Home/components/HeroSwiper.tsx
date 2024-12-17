import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { heroSections } from "@/data/home";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import Button from "@/components/Button";

const HeroSwiper = () => {
  return (
    <div className="w-full bg-white main-container">
      <Swiper
        spaceBetween={20}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper fullCarouselSwiperContainer"
      >
        {heroSections.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="sm:px-20 sm:grid sm:grid-cols-2 py-4 sm:py-8 flex flex-col-reverse justify-center items-center">
              <div className="col-span-1 flex flex-col justify-center gap-y-4 py-5">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-heading">
                  {item.title}
                </h1>
                <p className="text-description text-base">{item.description}</p>
                <Button
                  label={item.buttonText}
                  className="w-fit bg-brandpink text-white"
                ></Button>
              </div>
              <div className="col-span-1 ml-auto">
                <img className="max-w-[462px] w-full" src={item.image} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
