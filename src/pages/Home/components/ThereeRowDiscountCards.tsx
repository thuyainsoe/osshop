import DiscountCard from "@/components/DiscountCard";
import { threeCardsData } from "@/data/home";

const ThereeRowDiscountCards = () => {
  return (
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
  );
};

export default ThereeRowDiscountCards;
