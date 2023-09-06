import Mobile from "./mobile";
import Desktop from "./desktop";
import { useMediaQuery } from "@react-hook/media-query";

export default function Footer() {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  return (
    <div className=" bg-black w-screen h-auto  text-white  overflow-hidden">
      {isMobileScreen ? <Mobile /> : <Desktop />}
    </div>
  );
}
