import { HeartIcon } from "@/components/Icon";

type ItemCardDesignOneProps = {
  image: string;
  name: string;
  description: string;
  price: string;
  discount: string;
};

const ItemCardDesignOne = ({
  image,
  name,
  description,
  price,
  discount,
}: ItemCardDesignOneProps) => {
  return (
    <div className="w-full bg-white shadow-md rounded-md overflow-hidden">
      <img src={image} alt="" className="w-full aspect-square object-cover" />
      <div className="p-3 w-full flex flex-col items-start gap-y-2">
        <span className="w-fit text-xs h-[20px] flex items-center uppercase bg-brandpink px-1 rounded-sm">
          {discount}
        </span>
        <span className="text-base md:text-lg font-medium text-heading line-clamp-1">
          {name}
        </span>
        <span className="text-sm text-heading/50 line-clamp-2">
          {description}
        </span>
        <div className="w-full flex items-center justify-between">
          <span className="text-brandpink font-semibold text-base">
            {price}
          </span>
          <div className="flex items-center gap-1">
            <HeartIcon color="#0094cd" width="20" />
            <span className="text-brandblue text-sm">Wishlist</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardDesignOne;
