import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "@react-hook/media-query";
import { SportsMobileDesign } from "./Mobile";
import { SportDesktopDesign } from "./Desktop";
export default function Categories() {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      <h1 className=" font-semibold text-2xl pl-5 pt-3">Shop By Sport</h1>
      {isMobileScreen ? <SportsMobileDesign /> : <SportDesktopDesign />}
    </div>
  );
}
