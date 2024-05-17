import { FaStar } from "react-icons/fa";

const Rating = ({ vote_average }) => {
  return (
    <div className="flex items-center place-items-center gap-1">
      <p className="text-[20px] font-bold">
        {vote_average.toString().slice(0, 3)}
      </p>

      <FaStar size={19} className="text-yellow-400" />
    </div>
  );
};

export default Rating;
