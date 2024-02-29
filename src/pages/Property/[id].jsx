import React, { useEffect, useState } from "react";
import { IoBedOutline, IoCarOutline, IoClose } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { TbBath, TbChartAreaLine } from "react-icons/tb";
import Properties from "../../PropertyData/properties";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import ListingCard from "../../components/util/ListingCard";

const Property = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState("");
  const [property, setProperty] = useState();
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const foundItem = Properties.find((item) => item.id === parseInt(id));
    setProperty(foundItem);
  }, []);

  const addComma = (num) => {
    return num.toLocaleString();
  };
  return (
    <>
      {property ? (
        <>
          {videoOpen && (
            <div
              className={
                "fixed h-screen top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full bg-black/20 backdrop-blur-sm flex flex-col justify-center items-center gap-6 z-50"
              }
            >
              <IoClose
                onClick={() => {
                  setVideoOpen(false);
                }}
                className="p-1 text-4xl transition-all duration-200 ease-in-out rounded-full cursor-pointer text-primary hover:text-red hover:scale-105 bg-white/40 hover:rotate-180"
              />
              <ReactPlayer
                controls={true}
                priority
                playing={true}
                height={"85vh"}
                width={"90vw"}
                url={property.videoLink}
              ></ReactPlayer>
            </div>
          )}

          <div className="flex flex-col items-center mx-auto mt-6 gap-10 w-4/5 font-primary">
            <div className="w-full grid grid-cols-1 lg:grid-cols-5 h-max lg:h-[75vh]">
              <div className="w-full lg:col-span-3 h-full flex flex-col gap-4">
                <img
                  src={mainImage === "" ? property.images[0] : mainImage}
                  alt="House Interior"
                  className="h-4/5 object-cover rounded-xl"
                />

                <div className="w-full grid grid-cols-4 gap-4">
                  {property.images.map((item, index) => {
                    return (
                      <img
                        key={index}
                        onClick={() => setMainImage(item)}
                        src={item}
                        alt="House Interior"
                        className="h-full w-full object-cover rounded-md cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
                      />
                    );
                  })}
                </div>
              </div>
              <div className="w-full lg:col-span-2 h-full pt-10 lg:pt-0 lg:pl-10">
                <p className="text-sm capitalize flex items-center gap-1">
                  <span className="h-2 w-2 bg-Primary rounded-full"></span>
                  Listed For {property.type}
                </p>

                <div className="flex flex-col gap-6 mt-8">
                  <p className="text-3xl font-bold font-secondary">
                    {addComma(property.price)} ETB
                  </p>

                  <p className="text-sm font-primary flex items-center gap-1">
                    <LuMapPin />
                    {property.location}
                  </p>

                  <p className="font-primary">{property.description}</p>

                  <div className="w-full grid grid-cols-2 gap-8">
                    <p className="text-xl font-primary flex items-center gap-1">
                      <TbChartAreaLine /> {property.sqft} sqft
                    </p>
                    <p className="text-xl font-primary flex items-center gap-1">
                      <IoBedOutline /> {property.bedrooms} Bed Rooms
                    </p>{" "}
                    <p className="text-xl font-primary flex items-center gap-1">
                      <TbBath /> {property.bathrooms} Bath Rooms
                    </p>{" "}
                    <p className="text-xl font-primary flex items-center gap-1">
                      <IoCarOutline /> {3} Car Parking
                    </p>
                  </div>

                  <div className="flex flex-col w-full bg-Secondary/5 px-8 py-2 rounded-lg">
                    <p className="text-sm text-Secondary">Contact Detail</p>

                    <div className="grid grid-cols-2 gap-6">
                      <p className="ml-4 text-lg font-bold">
                        {property.contactPerson[0].fullName}
                      </p>
                      <p className="ml-4 text-lg font-bold">
                        {property.contactPerson[0].phoneNumber}
                      </p>
                    </div>
                  </div>

                  <p
                    onClick={() => {
                      setVideoOpen(true);
                    }}
                    className="hover:border-b-2 pb-1 border-Secondary w-max cursor-pointer"
                  >
                    Watch Room Tour
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Property;
