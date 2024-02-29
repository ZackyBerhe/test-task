import React from "react";
import { LuMapPin } from "react-icons/lu";
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import { TbBath, TbChartAreaLine } from "react-icons/tb";
import { Link } from "react-router-dom";

const ListingCard = ({
  path,
  type,
  bannerImage,
  price,
  location,
  area,
  bedRoom,
  bathRoom,
  parking,
}) => {
  const addComma = (num) => {
    return num.toLocaleString();
  };
  return (
    <>
      <Link
        to={path}
        className="flex flex-col gap-2 overflow-hidden rounded-lg bg-white shadow cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
      >
        <img src={bannerImage} className="w-full h-48 object-cover" />
        <div className="flex gap-4 flex-col p-4 pb-6">
          <p className="text-xs flex items-center gap-1 capitalize">
            <span className="h-2 w-2 bg-Primary rounded-full"></span>For {type}
          </p>
          <p className="text-lg font-bold font-secondary">
            {addComma(price)} ETB
          </p>
          <p className="text-sm font-primary flex items-center gap-1">
            <LuMapPin /> {location}
          </p>

          <div className="w-full grid grid-cols-2 gap-4">
            <p className="text-sm font-primary flex items-center gap-1">
              <TbChartAreaLine /> {area} sqft
            </p>
            <p className="text-sm font-primary flex items-center gap-1">
              <IoBedOutline /> {bedRoom} Bed Rooms
            </p>{" "}
            <p className="text-sm font-primary flex items-center gap-1">
              <TbBath /> {bathRoom} Bath Rooms
            </p>{" "}
            <p className="text-sm font-primary flex items-center gap-1">
              <IoCarOutline /> {parking} Car Parking
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListingCard;
