import React from "react";
import { LuMapPin } from "react-icons/lu";
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import { TbBath, TbChartAreaLine } from "react-icons/tb";

const ListingCard = () => {
  return (
    <>
      <div className="flex flex-col gap-2 overflow-hidden rounded-lg bg-white shadow cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full h-48 object-cover"
        />
        <div className="flex gap-4 flex-col p-2 pb-6">
          <p className="text-xs flex items-center gap-1">
            <span className="h-2 w-2 bg-Primary rounded-full"></span>For Sell
          </p>
          <p className="text-lg font-bold font-secondary">12,000,000 ETB</p>
          <p className="text-sm font-primary flex items-center gap-1">
            <LuMapPin /> 300m from Kassahun Building, Bole
          </p>

          <div className="w-full grid grid-cols-2 gap-4">
            <p className="text-sm font-primary flex items-center gap-1">
              <TbChartAreaLine /> 500 sqft
            </p>
            <p className="text-sm font-primary flex items-center gap-1">
              <IoBedOutline /> 5 Bed Rooms
            </p>{" "}
            <p className="text-sm font-primary flex items-center gap-1">
              <TbBath /> 4 Bath Rooms
            </p>{" "}
            <p className="text-sm font-primary flex items-center gap-1">
              <IoCarOutline /> 3 Car Parking
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
