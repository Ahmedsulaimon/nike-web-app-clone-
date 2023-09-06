import "react-multi-carousel/lib/styles.css";
import { MembershipDesktopDesign } from "./Desktop";
import { MembershipMobileDesign } from "./Mobile";
import { useMediaQuery } from "@react-hook/media-query";
export default function Categories() {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      <h1 className=" font-semibold text-2xl pl-5 pt-3">Nike Membership</h1>
      {isMobileScreen ? (
        <MembershipMobileDesign />
      ) : (
        <MembershipDesktopDesign />
      )}
    </div>
  );
}
