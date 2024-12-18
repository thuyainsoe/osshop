import { CopyLinkIcon, StarIcon } from "@/components/Icon";

const ItemDetail = () => {
  return (
    <div className="flex flex-col items-start gap-y-2 py-5 px-3 sm:pl-0 xl:px-5">
      <p className="text-lg font-medium">
        Red Shirt - Red Short Sleeve Shirt Red Short Sleeve Shirt
      </p>
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} />
        ))}
        <span className="text-sm text-brandblue ml-2 block">3 Ratings</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-brandblue">
        <span>11 Answered Questions</span>|<span>3 Reviews</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-brandblue">Posted:</span>
        <span className="text-xs text-description">24-Sept-2024</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium text-lg text-brandpink">15000MMK</span>
        <span className="line-through text-base text-description">
          18000MMK
        </span>
        <span className="w-fit inline-block px-2 py-1 bg-brandpink text-white text-sm rounded-md text-nowrap">
          10% Off
        </span>
      </div>
      {/* size section */}
      <div className="flex flex-col items-start gap-2">
        <span className="text-base font-medium text-heading">Size</span>
        <div className="flex items-center gap-[10px]">
          <div className="w-[45px] h-[45px] bg-white border-2 flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center  rounded-[50%] ">
              S
            </span>
          </div>
          <div className="w-[45px] h-[45px] border-brandblue bg-white border-2 flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center bg-brandblue rounded-[50%] text-white">
              M
            </span>
          </div>
          <div className="w-[45px] h-[45px] bg-white border-2 flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center  rounded-[50%] ">
              L
            </span>
          </div>
          <div className="w-[45px] h-[45px] bg-white border-2 flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center  rounded-[50%] ">
              XL
            </span>
          </div>
          <div className="w-[45px] h-[45px] bg-white border-2 flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center  rounded-[50%] ">
              XXL
            </span>
          </div>
        </div>
      </div>
      {/* color */}
      <div className="flex flex-col gap-[10px]">
        <label className="font-medium text-heading">Color</label>
        <div className="flex items-center gap-[10px]">
          <div className="w-[45px] h-[45px] bg-white border-2 border-transparent flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center bg-brandpink  rounded-[50%] "></span>
          </div>
          <div className="w-[45px] h-[45px] bg-white border-2 border-black flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center bg-[#AA223383]  rounded-[50%] "></span>
          </div>
          <div className="w-[45px] h-[45px] bg-white border-2 border-transparent flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center bg-[#EFF0F5]  rounded-[50%] "></span>
          </div>
          <div className="w-[45px] h-[45px] bg-white border-2 border-transparent flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center bg-[#555555]  rounded-[50%] "></span>
          </div>
          <div className="w-[45px] h-[45px] bg-white border-2 border-transparent flex items-center justify-center rounded-[50%]">
            <span className="text-[14px] font-medium w-[35px] h-[35px] flex items-center justify-center bg-[#828282]  rounded-[50%] "></span>
          </div>
        </div>
      </div>
      {/* share */}
      <div className="flex flex-col gap-2">
        <label className="font-medium text-heading">Share</label>
        <div className="flex items-center gap-1">
          <CopyLinkIcon />
          <span className="text-brandblue text-sm">Copy link</span>
        </div>
      </div>
      {/* button */}
      <button className="border border-brandblue rounded-sm w-full py-1 text-sm text-brandblue text-medium mt-2">
        Buy Now
      </button>
    </div>
  );
};

export default ItemDetail;
