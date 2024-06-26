import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./RatingStarInput.css";
import "./mediaqueries.css";

const RatingStarInput = ({ value, onChange }) => {
  const [hover, setHover] = useState(null);
  return (
    <div>
      <div className="star flex">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index + 1}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => onChange(currentRating)}
              />
              <FaStar
                className="cursor-pointer"
                size={35}
                color={currentRating <= (hover || value) ? "#000" : "#e4e5e9"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <div className="rating-value">{value}</div>
      </div>
    </div>
  );
};

export default RatingStarInput;
