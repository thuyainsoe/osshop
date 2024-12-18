import { StarIcon } from "./Icon";

const ReviewCard = ({
  userImage,
  username,
  date,
  reviewText,
  images = [],
  helpfulCount,
}: any) => {
  return (
    <div className="w-full flex items-start gap-2 border-b py-5">
      {/* User Image */}
      <img
        className="sm:h-12 sm:w-12 h-9 w-9 rounded-full aspect-square object-cover"
        src={userImage}
        alt="User"
      />

      {/* Review Content */}
      <div className="flex flex-col items-start text-black space-y-2">
        <div className="flex flex-col gap-1">
          <span className="text-base text-heading font-medium block">
            {username}
          </span>
          <span className="text-base text-description">{date}</span>

          {/* Star Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div className="text-base text-description">{reviewText}</div>

        {/* Review Images */}
        <div className="flex items-center gap-2">
          {images.map((img: any, index: number) => (
            <img
              key={index}
              className="w-[80px] sm:w-[100px] aspect-square object-cover"
              src={img}
              alt={`Review ${index}`}
            />
          ))}
        </div>

        {/* Helpful Count */}
        <span className="text-base text-description block">
          {helpfulCount} people found this helpful
        </span>

        {/* Helpful Buttons */}
        <div className="flex items-center gap-10">
          <span className="text-base text-description">
            Was this review helpful?
          </span>
          <div className="flex items-center gap-2 text-base">
            <button className="w-fit px-3 h-[30px] border rounded-md text-brandblue">
              Yes
            </button>
            <button className="w-fit px-3 h-[30px] border rounded-md text-brandblue">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
