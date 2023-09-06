import React from "react";
import { NavLink } from "react-router-dom";
import { SiNike, SiJordan } from "react-icons/si";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";

import Link from "next/link";

import { useShoppingCart } from "../../hooks/useContext/shoppingCartContext";
import { FaGreaterThan } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import Navdropdown from "../dropmenu/navdropmenu/navDropdown";

export function NavbarDesktopDesign() {
  const { cartQuantity } = useShoppingCart();
  return (
    <div>
      <div className="flex justify-between bg-gray-100">
        <div className=" ml-12 flex flex-row gap-6 py-2">
          <SiJordan className=" w-6 h-auto hover:text-neutral-400" />
          <FaGreaterThan className=" w-6 h-auto hover:text-neutral-400" />
        </div>
        <ul className=" flex flex-row my-3 mr-8 text-neutral-600 text-xs text-bold">
          <li className=" border border-y-0 border-l-0 border-r-2 border-gray-400 px-2 hover:text-neutral-400">
            Find a Store
          </li>
          <li className=" border border-y-0 border-l-0 border-r-2 border-gray-400 px-2 hover:text-neutral-400">
            Help
          </li>
          <li className=" border border-y-0 border-l-0 border-r-2 border-gray-400 px-2 hover:text-neutral-400">
            Join Us
          </li>
          <li className="  px-2 hover:text-neutral-400">Sign In</li>
        </ul>
      </div>

      <div className="  py-1 flex justify-between">
        <div>
          <NavLink to="/">
            <SiNike className=" ml-12 w-16 h-auto hover:text-neutral-400" />
          </NavLink>
        </div>

        <div>
          {" "}
          <Navdropdown />
        </div>

        <ul className="flex items-center gap-4 ">
          <li className="  rounded-full flex bg-neutral-200">
            <Link href="">
              <IoSearchOutline className=" w-7 h-auto m-2 rounded-full hover:bg-neutral-300 " />
            </Link>
            <input
              type="text"
              placeholder="Search"
              className=" border border-none w-28 bg-neutral-200 rounded-full pl-1 outline-none"
            />
          </li>
          <li className="  hover:bg-neutral-200 rounded-full">
            <Link href="">
              <BsSuitHeart className="w-7 h-auto m-2 " />
            </Link>
          </li>
          <div className=" relative">
            {cartQuantity > 0 && (
              <div className="absolute left-[18px] top-[23px] text-sm">
                {cartQuantity}
              </div>
            )}

            <li className="hover:bg-neutral-200 rounded-full   mr-6 ">
              <NavLink to="/ShoppingCart">
                <IoBagOutline className="w-7 h-auto m-2 py-2" />
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
