import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
import { GeneralSkeleton } from "../../skeletonLoader/cardSkeleton";
import classNames from "classnames";
export function MobileDesign() {
  const { nikeStoreData, isLoading } = useFetchedData();
  const [isScrolling, setIsScrolling] = useState(false);

  let scrollTimeout: number | NodeJS.Timeout;
  //hiding and displaying scrollbar thumb based on the state of 'isScrolling'
  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 4000);
  };

  return (
    <div>
      <div className="py-8">
        <ul
          onScroll={handleScroll}
          className={classNames(
            "flex flex-row gap-4 overflow-x-auto w-screen pb-4 my-6 justify-center items-center",
            "scroll-smooth scrollbar",
            {
              "scrollbar-hide transition-transform ease-in-out duration-300 transform":
                isScrolling === false,
              " display  scrollbar-thumb-slate-300 scrollbar-track-transparent transition-transform ease-in-out duration-300 transform":
                isScrolling === true,
            }
          )}
        >
          <li>
            {/* skeleton loader */}
            {isLoading && (
              <GeneralSkeleton cards={nikeStoreData.collection.length} />
            )}
            <div className=" flex flex-row gap-4 ">
              {nikeStoreData.collection.map((collection, index) => (
                <div className=" w-80 lg:w-[500px] md:w-[500px] ">
                  <div key={index}>
                    <Image
                      src={collection.img}
                      alt={collection.title}
                      width={400}
                      height={300}
                      className=" lg:w-fit md:w-fit"
                    />{" "}
                  </div>
                  <p className=" font-semibold pt-3 lg:text-lg">
                    {collection.title}
                  </p>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
