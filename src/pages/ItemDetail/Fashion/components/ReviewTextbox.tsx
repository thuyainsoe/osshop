import Button from "@/components/Button";
import { AttachFileIcon } from "@/components/Icon";

const ReviewTextbox = () => {
  return (
    <div className="w-full h-[150px] border border-description/50 rounded-md p-3 relative my-5">
      <textarea
        className="w-full h-full outline-none border-none text-description text-sm"
        placeholder="Write a review"
      ></textarea>
      <div className="flex items-center gap-2 absolute bottom-3 right-3">
        <AttachFileIcon />
        <Button
          label="Submit Review"
          className="w-fit h-[35px] bg-brandblue text-sm"
        />
      </div>
    </div>
  );
};

export default ReviewTextbox;
