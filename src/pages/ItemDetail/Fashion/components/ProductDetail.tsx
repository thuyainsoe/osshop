import { useState } from "react";
const DetailRow = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="flex justify-between items-start gap-5">
      <h3 className="font-medium text-sm text-gray-700">{title}</h3>
      <p className="text-gray-600 text-sm text-right">{content}</p>
    </div>
  );
};

const ProductDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="p-3 sm:p-5 bg-white">
      {/* Section Heading */}
      <h5 className="text-lg text-heading">Product Detail</h5>
      {/* Collapsible Content */}
      <div className="space-y-3 mt-4">
        <DetailRow
          title="Material"
          content="100% Premium Cotton, Comfortable Fit"
        />
        <DetailRow
          title="Color"
          content="Available in Red, Blue, White, and Black"
        />
        <DetailRow title="Fit Type" content="Regular Fit for All Sizes" />
        <DetailRow
          title="Care Instructions"
          content="Machine Wash Cold, Do Not Bleach"
        />
        <DetailRow title="Weight" content="Lightweight Fabric - 250g" />
      </div>

      {/* See More Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-brandblue text-sm mt-4 hover:underline"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 border-t pt-4 text-description text-sm">
          <p>
            This shirt is crafted for maximum comfort and durability, featuring
            premium stitching and high-quality fabric. Perfect for casual and
            formal occasions.
          </p>
          <p className="mt-2">
            Available in a variety of sizes to suit every preference.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
