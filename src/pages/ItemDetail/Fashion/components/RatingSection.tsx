import { StarIcon } from "@/components/Icon";

const ratingsData = [
  { rating: 5, percentage: 80, count: 100 },
  { rating: 4, percentage: 13, count: 200 },
  { rating: 3, percentage: 5.2, count: 25 },
  { rating: 2, percentage: 1.2, count: 10 },
  { rating: 1, percentage: 1.6, count: 15 },
];

const RatingSection = () => {
  return (
    <div className="grid sm:grid-cols-4 gap-3">
      {/* left section */}
      <div className="col-span-1">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-heading">4.5</span>
          <span className="text-brandblue text-sm">Out of 5 Star</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <div className="flex flex-col items-start gap-1 text-description text-sm mt-2">
          <span>300 Ratings</span>
          <span>3 Reviews</span>
        </div>
      </div>
      {/* right section */}
      <div className="col-span-3 text-[#828282] text-sm">
        <div className="space-y-2">
          {ratingsData.map((item) => (
            <div
              key={item.rating}
              className="w-full flex items-center justify-between gap-[15px]"
            >
              {/* Rating Star Section */}
              <div className="flex items-center gap-[8px] w-full">
                <span>{item.rating}</span>
                <StarIcon color="#828282" />
                <span
                  className="block h-[12px] bg-brandblue rounded-[3px]"
                  style={{ width: `${item.percentage}%` }}
                ></span>
                <span className="inline-block ml-auto">{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
