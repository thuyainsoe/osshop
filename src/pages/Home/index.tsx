import HeroSwiper from "./components/HeroSwiper";
import DiscountCard from "@/components/DiscountCard";
import { threeCardsData } from "@/data/home";

const Home = () => {
  return (
    <div className="w-full flex flex-col mt-[1px] gap-5">
      <HeroSwiper />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 main-container gap-x-5 gap-y-2">
        {threeCardsData.map((item) => (
          <DiscountCard
            className={item.className}
            btnBg={item.btnBg}
            discountAmount={item.amount}
            descriptionLabel={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
