import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "@react-hook/media-query";
import { IconsDesktopDesign } from "./Desktop";
import { IconsMobileDesign } from "./Mobile";

export default function Icons() {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      <h1 className=" font-semibold text-2xl pl-4 pt-3">Discover Our Icons</h1>
      {isMobileScreen ? <IconsMobileDesign /> : <IconsDesktopDesign />}
    </div>
  );
}
