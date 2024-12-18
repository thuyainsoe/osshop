// import { AttachFileIcon } from "@/components/Icon";
import { ChevronDownIcon } from "@/components/Icon";
import RatingSection from "./RatingSection";
import { reviews } from "@/data/fashion-detail";
import ReviewCard from "@/components/ReviewCard";
// import Button from "@/components/Button";

const ProductReview = () => {
  return (
    <div className="p-3 sm:p-5 bg-white">
      {/* Section Heading */}
      <h5 className="text-lg text-heading">Product Review</h5>
      <div className="mt-2 w-full">
        <RatingSection />
        {/* buttons */}
        <div className="w-full flex items-center mb-5 mt-7 gap-2">
          <div className="h-[30px] w-fit px-3 bg-white border rounded-md text-heading flex items-center gap-5 cursor-pointer text-sm">
            Fiter by rating
            <ChevronDownIcon />
          </div>
          <div className="h-[30px] w-fit px-3 bg-white border rounded-md text-heading flex items-center gap-5 cursor-pointer text-sm">
            Sort By
            <ChevronDownIcon />
          </div>
        </div>
        {/* reviews */}
        <div className="w-full flex flex-col items-start">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
