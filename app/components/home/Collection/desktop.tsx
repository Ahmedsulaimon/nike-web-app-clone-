import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
import { GeneralSkeleton } from "../../skeletonLoader/cardSkeleton";
export function DesktopDesign() {
  const { nikeStoreData, isLoading } = useFetchedData();
  return (
    <div className="py-8 ">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3.7,
            partialVisibilityGutter: 40,
          },

          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {nikeStoreData.collection.map((collections, index) => (
          <>
            {isLoading && (
              <GeneralSkeleton cards={nikeStoreData.collection.length} />
            )}

            <div key={index} className="w-80 xl:w-[500px] lg:w-80">
              <Image
                src={collections.img}
                alt={collections.title}
                width={400}
                height={300}
                className="lg:w-fit md:w-fit"
              />
              <p className="pl-7 font-semibold pt-3 lg:text-lg">
                {collections.title}
              </p>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
}
