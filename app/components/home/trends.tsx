import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { NavLink } from "react-router-dom";
import { TrendsSkeleton } from "../skeletonLoader/cardSkeleton";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
export default function Trends() {
  const { nikeStoreData, isLoading } = useFetchedData();

  const isLargeScreen = useMediaQuery("(min-width: 767px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderContainerRef = useRef<HTMLUListElement | null>(null);
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? nikeStoreData.trends.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === nikeStoreData.trends.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleScrollThumb = () => {
    if (sliderContainerRef.current) {
      sliderContainerRef.current.scrollLeft =
        (currentIndex * sliderContainerRef.current.clientWidth) /
        nikeStoreData.trends.length;
    }
  };

  return (
    <div>
      <div className=" flex justify-between">
        <h1 className="font-semibold text-2xl pl-5 pt-3 ">
          Trending This Week
        </h1>
        <div>
          {isLargeScreen && (
            <div className=" right mb-8 right-0 mr-4">
              <button
                onClick={() => {
                  goToPreviousSlide();
                  handleScrollThumb();
                }}
                className="p-4 m-2 rounded-full bg-neutral-300"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={() => {
                  goToNextSlide();
                  handleScrollThumb();
                }}
                className="p-4 m-2 rounded-full bg-neutral-300  "
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>

      <ul
        ref={sliderContainerRef}
        className="flex transition-transform duration-100 ease-in-out gap-4 
           mb-10 overflow-x-scroll pb-6 pr-10"
      >
        <li>
          {isLoading && <TrendsSkeleton cards={8} />}
          <div className=" flex flex-row gap-4  ">
            {nikeStoreData.trends.map((trending, index) => (
              <NavLink to={trending.link}>
                <div className=" w-80 lg:w-[600px] md:w-[430px]  leading-7 ">
                  <div key={index} className="relative">
                    <Image
                      src={trending.img}
                      alt={trending.title}
                      width={400}
                      height={300}
                      className=" lg:w-fit md:w-fit"
                    />{" "}
                  </div>
                  <p className="  font-semibold pt-3 lg:text-lg">
                    {trending.title}
                  </p>
                  <p className="  text-gray-500 lg:text-lg">{trending.desc}</p>
                  <p className="  font-semibold">
                    {" "}
                    <span>&#163;</span>
                    {trending.price}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}
