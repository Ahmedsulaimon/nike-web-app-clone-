import React, { useState } from "react";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";

const HoverDropupMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { nikeStoreData } = useFetchedData();
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      <button className=" px-4  text-xs text-bold  text-neutral-500  border-none hover:text-neutral-200 ">
        Guides
      </button>

      {showMenu && (
        <div
          className="absolute  bottom-3 py-3 w-[480px] max-h-60 bg-black border border-t-2 lg:w-[600px] lg:h-[200px] lg:gap-2
        border-x-3 border-b-3 border-neutral-400 grid grid-cols-3 gap-3 hover:text-neutral-200"
        >
          {nikeStoreData.dropUp.map((drop, index) => (
            <a
              key={index}
              href="#"
              className="block px-4  text-neutral-500 text-xs font-semibold hover:text-neutral-200 "
            >
              {drop}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverDropupMenu;
