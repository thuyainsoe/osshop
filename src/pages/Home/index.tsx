import HeroSwiper from "./components/HeroSwiper";
import ThereeRowDiscountCards from "./components/ThereeRowDiscountCards";

const Home = () => {
  return (
    <div className="w-full flex flex-col mt-[1px] gap-5">
      <HeroSwiper />
      <ThereeRowDiscountCards />
    </div>
  );
};

export default Home;
