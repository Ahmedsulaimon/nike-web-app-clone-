import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
import { GeneralSkeleton } from "../../skeletonLoader/cardSkeleton";
import classNames from "classnames";
export function IconsMobileDesign() {
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
      <div className="py-8 ">
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
            {isLoading && <GeneralSkeleton cards={8} />}
            <div className=" flex flex-row gap-4 ">
              {nikeStoreData.Icons.map((icon, index) => (
                <div key={index} className=" w-80 lg:w-[500px] md:w-[430px]">
                  <Image
                    src={icon.img}
                    alt={icon.title}
                    width={400}
                    height={300}
                    className="lg:w-fit md:w-fit"
                  />
                  <p className="pl-7 font-semibold pt-3 lg:text-lg">
                    {icon.title}
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
