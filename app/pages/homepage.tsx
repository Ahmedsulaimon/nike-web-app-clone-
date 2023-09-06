import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import main from "@/public/main-image.jpg";
import main2 from "@/public/main nike img.jpg";
import DpContent from "../components/dropmenu/dropDown/dpcontent";
import Categories from "../components/home/Collection/collection";
import Explore from "../components/home/explore";
import Icons from "../components/home/Icons/icons";
import Membership from "../components/home/NikeMembership/membership";
import NikeApp from "../components/home/nikeapps";
import Sport from "../components/home/Sports/sport";
import Trends from "../components/home/trends";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
function Home() {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div className=" text-center my-20">
        <h1 className=" font-black px-30 text-6xl mb-7 ">
          LEADERS LIKE NEVER BEFORE
        </h1>
        <div>
          <p className="mb-7 font-semibold">England National Team Collection</p>
          <button className=" bg-black text-white font-bold rounded-3xl px-6 py-2">
            Shop{" "}
          </button>
        </div>
      </div>

      <div>
        {" "}
        {isMobileScreen ? (
          <Image src={main || <Skeleton />} alt="image" />
        ) : (
          <Image src={main2 || <Skeleton />} alt=" desktop image" />
        )}
      </div>

      {/* categories */}
      <Categories />

      <Trends />

      <Icons />

      <Explore />

      <Sport />

      <NikeApp />

      <Membership />
      <div>
        <DpContent />
      </div>
    </div>
  );
}
export default Home;
