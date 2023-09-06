import Slideshow from "./slideshow";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
const Data = () => {
  const { nikeStoreData } = useFetchedData();

  const autoSlideDuration = 6000;
  if (!nikeStoreData.AutoSlider || nikeStoreData.AutoSlider.length === 0) {
    return null; // You can return a placeholder or handle this case as needed
  }

  return (
    <div className=" mx-auto p-4 bg-gray-100 text-center border-solid border-b-[1px] border-t-[0px] h-20">
      <Slideshow
        content={nikeStoreData.AutoSlider}
        autoSlideDuration={autoSlideDuration}
      />
    </div>
  );
};

export default Data;
