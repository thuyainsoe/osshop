import ItemCardDesignOne from "@/components/ItemCardDesignOne";
import { recommendedItems } from "@/data/home";
import Heading4 from "@/components/Heading4";

const NewArrivalSection = () => {
  return (
    <div className="main-container w-full flex flex-col items-start gap-y-3">
      <Heading4 label="New Arrival" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {recommendedItems.slice(0, 5).map((item, index) => (
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
  );
};

export default NewArrivalSection;
