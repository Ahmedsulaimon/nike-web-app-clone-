import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";
import DropDown from "./dropdownmenu";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
export default function DpContent() {
  const [showMenu, setShowMenu] = useState(false);
  const { nikeStoreData } = useFetchedData();
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  const footwear = nikeStoreData.shoes.map((shoe) => (
    <ul>
      <li>{shoe}</li>
    </ul>
  ));
  const clothings = nikeStoreData.clothing.map((clothe) => (
    <ul>
      <li>{clothe}</li>
    </ul>
  ));
  const kidsWear = nikeStoreData.youngOnes.map((kid) => (
    <ul>
      <li>{kid}</li>
    </ul>
  ));
  const collaborations = nikeStoreData.featured.map((collabe) => (
    <ul>
      <li>{collabe}</li>
    </ul>
  ));
  const dropdowns = [
    { title: "SHOES", content: footwear },
    { title: "CLOTHINGS", content: clothings },
    { title: "KIDS'", content: kidsWear },
    { title: "FEATURED", content: collaborations },
  ];
  return (
    <div>
      {isMobileScreen ? (
        //mobile view
        <div>
          {dropdowns.map((dropdown, index) => (
            <DropDown
              key={index}
              title={dropdown.title}
              content={dropdown.content}
              isOpen={openDropdownIndex === index}
              toggle={() => toggleDropdown(index)}
            />
          ))}
        </div>
      ) : (
        //desktop or tablet view
        //displaying all items when the parent container gets hovered and hiding contents when hovering stops
        <div
          className=" flex justify-center items-center "
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
          <div className="w-[1000px] text-sm text-bold py-6 pt-24  ">
            <div className=" grid grid-cols-4 ">
              <div>
                <h1 className=" mb-4 ">{dropdowns[0].title}</h1>
                <div className=" leading-8 text-neutral-500">
                  {/* {footwear} */}
                  {nikeStoreData.shoes.map((item, index) => (
                    <ul>
                      <li key={index}>
                        {showMenu == true && index > 3
                          ? item
                          : index < 4
                          ? item
                          : ""}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
              <div>
                <h1 className=" mb-4 ">{dropdowns[1].title}</h1>
                <div className=" leading-8 text-neutral-500">
                  {/* {clothings} */}
                  {nikeStoreData.clothing.map((item, index) => (
                    <ul>
                      <li key={index}>
                        {showMenu == true && index > 3
                          ? item
                          : index < 4
                          ? item
                          : ""}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
              <div>
                <h1 className=" mb-4 ">{dropdowns[2].title}</h1>
                <div className=" leading-8 text-neutral-500">
                  {/* {kidsWear} */}
                  {nikeStoreData.youngOnes.map((item, index) => (
                    <ul>
                      <li key={index}>
                        {showMenu == true && index > 3
                          ? item
                          : index < 4
                          ? item
                          : ""}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
              <div>
                <h1 className=" mb-4 ">{dropdowns[3].title}</h1>
                <div className=" leading-8 text-neutral-500">
                  {" "}
                  {/* {collaborations} */}
                  {nikeStoreData.featured.map((item, index) => (
                    <ul>
                      <li key={index}>
                        {showMenu == true && index > 3
                          ? item
                          : index < 4
                          ? item
                          : ""}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          {/*  */}
        </div>
      )}
    </div>
  );
}
