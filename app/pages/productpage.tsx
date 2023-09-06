import React from "react";
import { useState } from "react";
import Image from "next/image";
import nikeStoreData from "@/app/Data/nikeStoreData.json";
import classNames from "classnames";
import ProductInfo from "../components/product/productinfo";
import Trends from "../components/home/trends";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Productpage() {
  const [displayIndex, SetDisplayIndex] = useState(0);

  const goToPreviousSlide = () => {
    SetDisplayIndex((prevIndex) =>
      prevIndex === 0 ? nikeStoreData.dunkLow.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    SetDisplayIndex((prevIndex) =>
      prevIndex === nikeStoreData.dunkLow.length - 1 ? 0 : prevIndex + 1
    );
  };
  const selectedProductId = nikeStoreData.trends[0].id;
  return (
    <div>
      <div className=" flex flex-row  justify-center ">
        <div className=" flex flex-row mr-10">
          <div>
            <ul className=" flex flex-col mx-3 mt-2">
              <li>
                <Image
                  width={600}
                  height={400}
                  src={nikeStoreData.dunkLow[0]}
                  alt="different angle of dunk low"
                  onMouseEnter={() => SetDisplayIndex(0)}
                  className={classNames(
                    " w-14 h-auto mb-2 rounded-md cursor-pointer",
                    {
                      " brightness-75": displayIndex === 0,
                    }
                  )}
                />
              </li>
              <li>
                <Image
                  src={nikeStoreData.dunkLow[1]}
                  alt="different angle of dunk low"
                  width={600}
                  height={400}
                  onMouseEnter={() => SetDisplayIndex(1)}
                  className={classNames(
                    " w-14 h-auto mb-2 rounded-md cursor-pointer",
                    {
                      "brightness-75": displayIndex === 1,
                    }
                  )}
                />
              </li>
              <li>
                <Image
                  src={nikeStoreData.dunkLow[2]}
                  alt="different angle of dunk low"
                  width={300}
                  height={400}
                  onMouseEnter={() => SetDisplayIndex(2)}
                  className={classNames(
                    " w-14 h-auto mb-2 rounded-md cursor-pointer",
                    {
                      "brightness-75": displayIndex === 2,
                    }
                  )}
                />
              </li>
              <li>
                <Image
                  src={nikeStoreData.dunkLow[3]}
                  alt="different angle of dunk low"
                  width={300}
                  height={400}
                  onMouseEnter={() => SetDisplayIndex(3)}
                  className={classNames(
                    " w-14 h-auto mb-2 rounded-md cursor-pointer",
                    {
                      "brightness-75": displayIndex === 3,
                    }
                  )}
                />
              </li>
              <li>
                <Image
                  src={nikeStoreData.dunkLow[4]}
                  alt="different angle of dunk low"
                  width={300}
                  height={400}
                  onMouseEnter={() => SetDisplayIndex(4)}
                  className={classNames(
                    " w-14 h-auto mb-2 rounded-md cursor-pointer",
                    {
                      "brightness-75": displayIndex === 4,
                    }
                  )}
                />
              </li>
              <li>
                <Image
                  src={nikeStoreData.dunkLow[5]}
                  alt="different angle of dunk low"
                  width={300}
                  height={400}
                  onMouseEnter={() => SetDisplayIndex(5)}
                  className={classNames(
                    " w-14 h-auto mb-2 rounded-md cursor-pointer",
                    {
                      "brightness-75": displayIndex === 5,
                    }
                  )}
                />
              </li>
              <li>
                <Image
                  src={nikeStoreData.dunkLow[6]}
                  alt="different angle of dunk low"
                  width={300}
                  height={400}
                  onMouseEnter={() => SetDisplayIndex(6)}
                  className={classNames(
                    " w-14 h-auto  mb-2 rounded-md cursor-pointer",
                    {
                      "brightness-90": displayIndex === 6,
                    }
                  )}
                />
              </li>
              <li>
                <Image
                  src={nikeStoreData.dunkLow[7]}
                  alt="different angle of dunk low"
                  width={300}
                  height={400}
                  onMouseEnter={() => SetDisplayIndex(7)}
                  className={classNames(
                    " w-14 h-auto mb-2 rounded-md cursor-pointer ",
                    {
                      "brightness-75": displayIndex === 7,
                    }
                  )}
                />
              </li>
            </ul>
          </div>
          {/*  opacity-0 group-hover:opacity-75 transition-opacity duration-300 */}
          <div className=" w-[500px] h-[650px]  mt-4 relative">
            <Image
              src={nikeStoreData.dunkLow[displayIndex]}
              alt="different angle of dunk low"
              width={600}
              height={400}
              className=" h-full w-full rounded-lg object-cover"
            />

            <div className=" absolute bottom-0 right-2">
              <button
                onClick={() => {
                  goToPreviousSlide();
                }}
                className="p-4 m-1 rounded-full bg-white  "
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={() => {
                  goToNextSlide();
                }}
                className="p-4 m-1 rounded-full bg-white  "
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>{" "}
        <ProductInfo id={selectedProductId} />
      </div>
      <Trends />
    </div>
  );
}

export default Productpage;
