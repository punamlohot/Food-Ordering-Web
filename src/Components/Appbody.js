import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import SearchComponent from "./SearchFun";
import { RestaurantList } from "../Utilities/SampleData";

const Body = () => {
  const [cardArray, setCardArray] = useState([]);
  const [masterCards, setMasterCards] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    setCardArray(RestaurantList);
    setMasterCards(RestaurantList);
    console.log("restaurant data", RestaurantList);
    // try {
    //   const data = await fetch(
    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5097358&lng=73.8475543&page_type=DESKTOP_WEB_LISTING"
    //   );
    //   const json = await data.json();
    //   // console.log(json);
    //   setCardArray(
    //     json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants || []
    //   );
    //   console.log(cardArray);
    //   setMasterCards(
    //     json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    //   );
    // } catch (error) {
    //   console.error("Error fetching data : ", error);
    // }
  }

  return cardArray === null ? (
    <h1 className="Loader">Loading</h1>
  ) : (
    <>
      <SearchComponent masterCards={masterCards} setCardArray={setCardArray} />

      <div>
        <div className="container d-flex flex-wrap">
          {cardArray.map((card) => (
            <RestaurantCard
              key={card.name}
              cloudinaryImageId={card.cloudinaryImageId}
              name={card.name}
              cuisines={card.cuisines}
              avgRating={card.avgRating}
              costForTwoString={card.costForTwo}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
