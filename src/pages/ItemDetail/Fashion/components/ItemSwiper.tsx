import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

const ItemSwiper = () => {
  return (
    <Swiper
      spaceBetween={20}
      cssMode={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper detailSwiper"
    >
      {[...Array(2)].map((_, index) => (
        <SwiperSlide className="!w-full" key={index}>
          <img
            className="aspect-[380_/_441]"
            src="https://s3-alpha-sig.figma.com/img/5767/0b8b/ebd24d18f2fcfc561391fa87978bfacc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GVbTj4dIyJE277meqOt165lk13i1k8Ocny92JL8ArFc~KxcHX7L303dfyQZKB8y0Ts~sdJl~lBWNZPZTHptWTa8Fiqtpgt2lNoycmoiibHJr9IJNTKLQuX-nhGTT0CoTvR5e2lAyaiXGLjsdMB8j7tcF-tZCeH04BTVTGXHEqQ~enfomhowKKZNZdecu3mpOfjW5YP989-NYFl2dNsGLRZ5UN2HCOSnZVISBO9K7JFPFKntDXHTotjzEVtt3bMM-KOJyzFBsJCHsynM1ifXe03n~9kN6plaHrUV8Akv9iGIwhXnPjH3oaTREwAL~q8PMkdCkpKM2MPC7k-VvPTrlgA__"
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ItemSwiper;
