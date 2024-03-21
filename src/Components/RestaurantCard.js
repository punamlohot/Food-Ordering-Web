import React from "react";
//import {useState,useEffect} from "react";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
}) => {
  // const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

  // const [cardArray,setCardArray] = useState(Cards);///
  // const [masterCards,setMasterCards]=useState(Cards);

  return (
    <div className="card restaurantCard m-2 p-3">
      <img
        src={cloudinaryImageId}
        width="100%"
        height="150px"
        alt="see ur restaurant"
      />
      <h6 className="mb-2">{name}</h6>
      <h6 className="mb-2">{cuisines}</h6>
      <h6 className="mb-2">{avgRating}</h6>
      <h6 className="mb-2">{costForTwoString}</h6>
      <a className="quick-view" href=" ">
        Quick View
      </a>
    </div>
  );
};

export default RestaurantCard;
