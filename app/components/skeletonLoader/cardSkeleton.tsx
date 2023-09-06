import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface cardProp {
  cards: number;
}
export function TrendsSkeleton({ cards }: cardProp) {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
      <div className=" flex flex-row gap-4 ">
        {Array(cards)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <div className=" w-80 lg:w-[600px] md:w-[430px] lg:h-[600px] h-80 md:h-[430px] bg-neutral-200 "></div>
              <div className=" w-48  mt-4 mb-2 ">
                <Skeleton count={3} />
              </div>
            </div>
          ))}
      </div>
    </SkeletonTheme>
  );
}
// for other sections
export function GeneralSkeleton({ cards }: cardProp) {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
      <div className=" flex flex-row gap-4 ">
        {Array(cards)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <div className=" w-80 lg:w-[500px] md:w-[430px] lg:h-[500px] h-80 md:h-[430px] bg-neutral-200 "></div>
              <div className=" w-48  pl-7 font-semibold pt-3  ">
                <Skeleton />
              </div>
            </div>
          ))}
      </div>
    </SkeletonTheme>
  );
}
// for explore sections
export function ExploreSkeleton({ cards }: cardProp) {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
      <div className=" flex flex-row gap-4 justify-center">
        {Array(cards)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <div className=" w-80 lg:w-[600px] md:w-[430px]  lg:h-[750px] h-[400px] md:h-[530px] bg-neutral-200 "></div>
            </div>
          ))}
      </div>
    </SkeletonTheme>
  );
}
// for NikeApp sections
export function NikeAppSkeleton({ cards }: cardProp) {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
      <div className="  lg:flex flex-row gap-4 justify-center ">
        {Array(cards)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <div className=" w-[460px]  xl:w-[920px] md:w-[820px] md:h-[450px] lg:h-[450px] h-[600px]  bg-neutral-200 mb-4"></div>
            </div>
          ))}
      </div>
    </SkeletonTheme>
  );
}
