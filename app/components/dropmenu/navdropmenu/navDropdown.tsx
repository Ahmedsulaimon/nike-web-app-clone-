import { useState } from "react";
import nikeStoreData from "@/app/Data/nikeStoreData.json";
import NewFeatured from "./new&Featured";
export default function Navdropdown() {
  const [FeaturedMenu, setFeaturedMenu] = useState(false);
  const [MenMenu, setMenMenu] = useState(false);
  const [WomenMenu, setWomenMenu] = useState(false);
  const [KidsMenu, setKidsMenu] = useState(false);
  const [SaleMenu, setSaleMenu] = useState(false);

  //displaying contents using dropdown menu on the navbar

  const toggleFeaturedMenu = () => {
    setFeaturedMenu((prevState) => !prevState);
  };
  const toggleMenMenu = () => {
    setMenMenu((prevState) => !prevState);
  };
  const toggleWomenMenu = () => {
    setWomenMenu((prevState) => !prevState);
  };
  const toggleKidsMenu = () => {
    setKidsMenu((prevState) => !prevState);
  };
  const toggleSaleMenu = () => {
    setSaleMenu((prevState) => !prevState);
  };

  return (
    <div>
      <ul className=" gap-6 flex flex-row py-4 font-sans text-lg  ">
        <li>
          <NewFeatured
            newFeature={nikeStoreData.categories.new}
            showMenu={FeaturedMenu}
            toggleMenu={toggleFeaturedMenu}
          />
        </li>
      </ul>
    </div>
  );
}
