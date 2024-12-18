import Heading4 from "@/components/Heading4";
import CategorySection from "./components/CategorySection";
import HeroSwiper from "./components/HeroSwiper";
import ThereeRowDiscountCards from "./components/ThereeRowDiscountCards";
import ItemCardDesignOne from "@/components/ItemCardDesignOne";
import { recommendedItems } from "@/data/home";

const Home = () => {
  return (
    <div className="w-full flex flex-col mt-[1px] gap-5">
      <HeroSwiper />
      <ThereeRowDiscountCards />
      <CategorySection />
      <div className="main-container w-full flex flex-col items-start gap-y-3">
        <Heading4 label="Recommended For You" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
          {recommendedItems.map((item, index) => (
            <ItemCardDesignOne
              key={index}
              discount={item.discount}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
