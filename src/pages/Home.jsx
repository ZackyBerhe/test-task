import React, { useEffect, useState } from "react";
import Select from "react-select";
import ListingCard from "../components/util/ListingCard";
import Properties from "../PropertyData/properties";

const Home = () => {
  const [viewItems, setViewItems] = useState("all");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    filterProperties();
  }, [viewItems]);

  const filterProperties = () => {
    if (viewItems === "all") {
      setProperties(Properties);
    } else {
      const filtered = Properties.filter((item) => item.type === viewItems);
      setProperties(filtered);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mx-auto mt-6 gap-10 w-4/5">
        <div className="w-full h-[75vh] relative rounded-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2331025/pexels-photo-2331025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover"
          />

          <div className="text-Secondary text-3xl sm:text-5xl font-secondary font-bold absolute bg-white capitalize py-4 top-40 px-8 flex flex-col gap-3 rounded-r-xl leading-tight w-4/5 lg:w-1/2">
            <p>Making your real estate dream reality</p>
          </div>
        </div>
        <label className="shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md px-6 py-2 bg-Secondary/5 w-max">
          <input type="checkbox" className="sr-only" checked={viewItems} />
          <span
            onClick={() => {
              setViewItems("all");
            }}
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              viewItems === "all" ? "text-white bg-Primary" : "text-body-color"
            }`}
          >
            All Listings
          </span>
          <span
            onClick={() => {
              setViewItems("sell");
            }}
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              viewItems === "sell" ? "text-white bg-Primary" : "text-body-color"
            }`}
          >
            For Sell
          </span>
          <span
            onClick={() => {
              setViewItems("rent");
            }}
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              viewItems === "rent" ? "text-white bg-Primary" : "text-body-color"
            }`}
          >
            For Rent
          </span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {properties?.map((item) => {
            return (
              <ListingCard
                key={item.id}
                path={`/property/${item.id}`}
                type={item.type}
                bannerImage={item.images[0]}
                price={item.price}
                location={item.location}
                area={item.sqft}
                bedRoom={item.bedrooms}
                bathRoom={item.bathrooms}
                parking={3}
              />
            );
          })}
        </div>

        {/* Pagination */}
        <div class="flex items-center gap-4 py-10">
          <button
            disabled
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-Secondary uppercase align-middle transition-all rounded-lg select-none hover:bg-Primary/10 active:bg-Primary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
            Previous
          </button>
          <div class="flex items-center gap-2">
            <button
              class="relative h-10 max-h-[30px] w-10 max-w-[30px] select-none rounded-lg bg-Primary text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-Primary/10 transition-all hover:shadow-lg hover:shadow-Primary/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                1
              </span>
            </button>
            <button
              class="relative h-10 max-h-[30px] w-10 max-w-[30px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-Secondary transition-all hover:bg-Primary/10 active:bg-Primary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                2
              </span>
            </button>
            <button
              class="relative h-10 max-h-[30px] w-10 max-w-[30px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-Secondary transition-all hover:bg-Primary/10 active:bg-Primary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                3
              </span>
            </button>
            <button
              class="relative h-10 max-h-[30px] w-10 max-w-[30px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-Secondary transition-all hover:bg-Primary/10 active:bg-Primary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                4
              </span>
            </button>
            <button
              class="relative h-10 max-h-[30px] w-10 max-w-[30px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-Secondary transition-all hover:bg-Primary/10 active:bg-Primary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                5
              </span>
            </button>
          </div>
          <button
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-Secondary uppercase align-middle transition-all rounded-lg select-none hover:bg-Primary/10 active:bg-Primary/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
