import CategorySection from "./components/CategorySection";
import HeroSwiper from "./components/HeroSwiper";
import NewArrivalSection from "./components/NewArrivalSection";
import RecommendedSection from "./components/RecommendedSection";
import ThereeRowDiscountCards from "./components/ThereeRowDiscountCards";

const Home = () => {
  return (
    <div className="w-full flex flex-col mt-[1px] gap-8 pb-[70px]">
      <HeroSwiper />
      <ThereeRowDiscountCards />
      <CategorySection />
      <RecommendedSection />
      <NewArrivalSection />
    </div>
  );
};

export default Home;
