import Button from "./Button";

type DiscountCardProps = {
  className: string;
  discountAmount: string;
  descriptionLabel: string;
  image: string;
  btnBg: string;
};

const DiscountCard = ({
  className,
  discountAmount,
  descriptionLabel,
  image,
  btnBg,
}: DiscountCardProps) => {
  return (
    <div
      className={`${className} w-full  p-5 grid grid-cols-2  h-[212px] rounded-sm`}
    >
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-3xl font-bold">{discountAmount}</span>
        <span>{descriptionLabel}</span>
        <Button
          label="Shop Now"
          className={`${btnBg} w-fit text-white Buttonh-[40px]`}
        />
      </div>
      <div className="w-full h-full overflow-hidden ml-auto">
        <img
          className="h-full object-contain ml-auto"
          src={image}
          alt={descriptionLabel}
        />
      </div>
    </div>
  );
};

export default DiscountCard;
