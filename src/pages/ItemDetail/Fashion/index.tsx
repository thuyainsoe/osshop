import Breadcrumb from "@/components/BreadCrumb";
import ItemSwiper from "./components/ItemSwiper";
import ItemDetail from "./components/ItemDetail";
import ProductDetail from "./components/ProductDetail";
import ProductReview from "./components/ProductReview";
const Fashion = () => {
  return (
    <div className="main-container sm:py-5 flex flex-col gap-3 sm:gap-5">
      <div className="w-full hidden sm:block">
        <Breadcrumb />
      </div>
      <div className="w-full grid mdlg:grid-cols-3 gap-x-5">
        <div className="col-span-2  bg-white shadow-sm">
          <div className="flex flex-col sm:grid sm:grid-cols-2 w-full gap-3 text-black">
            <div className="sm:col-span-1 py-2">
              <ItemSwiper />
            </div>
            <div className="sm:col-span-1">
              <ItemDetail />
            </div>
          </div>
          <ProductDetail />
          <ProductReview />
        </div>
        <div className="col-span-1 bg-white shadow-sm"></div>
      </div>
    </div>
  );
};

export default Fashion;
