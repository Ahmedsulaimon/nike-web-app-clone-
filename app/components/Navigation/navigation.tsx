import { useMediaQuery } from "@react-hook/media-query";
import Data from "../slider/slidershowdata";

import { NavbarMobileDesign } from "./mobile";
import { NavbarDesktopDesign } from "./desktop";
export default function Navigation() {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      <nav>
        {isMobileScreen ? <NavbarMobileDesign /> : <NavbarDesktopDesign />}
      </nav>
      <Data />
    </div>
  );
}
