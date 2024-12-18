import Heading4 from "@/components/Heading4";
import { NavChevronLeftIcon } from "@/components/Icon";
import { categories } from "@/data/home";
import { useState } from "react";

const CategorySection = () => {
  const [activeId, setActiveId] = useState(1);
  return (
    <div className="flex flex-col items-start gap-y-3 main-container">
      <Heading4 label="Category" />
      {/* Category section */}
      <div className="md:grid  md:grid-cols-3 lg:grid-cols-4 bg-white w-full  overflow-hidden">
        <div className="md:col-span-1 md:border-r border-[#ddd] pb-0 md:pb-5 p-3 md:p-5 text-black">
          <ul className="w-full overflow-x-auto flex flex-row md:flex-col text-nowrap gap-x-6 scrollbar">
            {categories.map((category) => (
              <li
                className={`${
                  category.id === activeId && "activeBrandblue"
                } text-description cursor-pointer text-sm font-normal w-full py-2
                 flex items-center justify-between hoverBrandblue`}
                onClick={() => setActiveId(category.id)}
              >
                {category.name}
                <div className="rotate-[180deg] w-[8px] opacity-0 md:opacity-100">
                  <NavChevronLeftIcon color="#828282" width="8" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 lg:col-span-3 pt-2 md:pt-5 p-3 md:p-5 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 h-fit items-start">
          {categories
            .find((category) => category.id === activeId)
            ?.subCategories?.map((subCategory) => (
              <div
                className="text-black  w-full flex flex-col text-center rounded-md
                items-center justify-center gap-y-4 py-1 sm:py-3 md:px-2"
              >
                <img
                  className="w-[80%] sm:w-[70%] !aspect-square rounded-full object-contain border"
                  src={subCategory.image}
                  alt=""
                />
                <span className="text-center text-xs ">
                  {subCategory?.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
