import Image from "next/image";
import { BsEye } from "react-icons/bs";
import { useState } from "react";
import classNames from "classnames";
import { ExploreSkeleton } from "../skeletonLoader/cardSkeleton";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
export default function Explore() {
  const [isScrolling, setIsScrolling] = useState(false);
  const { nikeStoreData, isLoading } = useFetchedData();
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
      <h1 className="font-semibold text-2xl pl-5">More to Explore</h1>
      <div>
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
            {isLoading && <ExploreSkeleton cards={3} />}
            <div className="flex flex-row gap-4 justify-center">
              {nikeStoreData.explore.map((explore, index) => (
                <div
                  key={index}
                  className="w-80 h-auto lg:w-auto border border-t-2"
                >
                  <div className="relative">
                    <Image
                      src={explore.img}
                      alt={explore.btnOne}
                      width={400}
                      height={300}
                      className="lg:w-fit lg:h-fit"
                    />
                    <div className="absolute bottom-0 left-0 ml-6 mb-2 lg:ml-14 lg:mb-20 gap-2 flex flex-wrap w-56 lg:w-96 lg:flex-row">
                      <button className="bg-white hover:bg-gray-100 text-sm font-bold pt-2 pb-2 px-4 mr-2 rounded-3xl">
                        {explore.btnOne}
                      </button>

                      <button className="bg-white hover:bg-gray-100 text-sm font-bold pt-2 pb-2 px-4 rounded-3xl">
                        <div className="flex flex-row items-center">
                          <BsEye className="w-5 h-auto mr-2" />
                          <p>{explore.btntwo}</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
