import ItemCardDesignOne from "@/components/ItemCardDesignOne";
import { recommendedItems } from "@/data/home";
import Heading4 from "@/components/Heading4";

const RecommendedSection = () => {
  return (
    <div className="main-container w-full flex flex-col items-start gap-y-3">
      <Heading4 label="Recommended For You" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {recommendedItems.map((item, index) => (
          <ItemCardDesignOne key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;
