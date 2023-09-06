import { useMediaQuery } from "@react-hook/media-query";
import { MobileDesign } from "./mobile";
import { DesktopDesign } from "./desktop";
export default function Categories() {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  return <div>{isMobileScreen ? <MobileDesign /> : <DesktopDesign />}</div>;
}
