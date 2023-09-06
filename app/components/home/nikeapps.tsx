import nikeStoreData from "@/app/Data/nikeStoreData.json";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import { NikeAppSkeleton } from "../skeletonLoader/cardSkeleton";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
export default function NikeApp() {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  const { nikeStoreData, isLoading } = useFetchedData();
  return (
    <div>
      <h1 className=" font-semibold text-2xl pl-5 mb-6">Discover Our Apps</h1>
      <ul className=" flex flex-wrap w-screen gap-3 justify-center mb-10 lg:flex lg:flex-row  sm:flex sm:flex-row  md:flex md:flex-row ">
        {/* skeleton loader */}
        {isLoading && <NikeAppSkeleton cards={2} />}
        {nikeStoreData.apps.map((app, index) => (
          <>
            <li key={index} className=" relative ">
              {isMobileScreen ? (
                <div>
                  <Image
                    src={app.img}
                    alt={app.btn}
                    width={300}
                    height={300}
                    className=" w-screen px-8"
                  />
                </div>
              ) : (
                <div className="flex w-full  ">
                  <Image
                    src={app.desktopImg}
                    alt={app.btn}
                    width={900}
                    height={500}
                  />
                </div>
              )}

              <div className="absolute bottom-0 left-0 ml-6 mb-2 lg:ml-14  lg:mb-10  gap-2 ">
                <p className=" text-white  pb-14   w-54 ml-2 max-w-lg flex flex-wrap">
                  {" "}
                  {app.desc}
                </p>

                <button className="bg-white hover:bg-gray-100 text-sm font-bold py-2 px-5 mt-4 ml-4 rounded-3xl mb-4 ">
                  {app.btn}
                </button>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
