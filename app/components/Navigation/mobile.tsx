import React from "react";
import { NavLink } from "react-router-dom";
import { SiNike } from "react-icons/si";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

export function NavbarMobileDesign() {
  return (
    <div className="  pt-5 flex justify-between ">
      <div>
        <NavLink to="/">
          <SiNike className=" ml-8 w-16 h-auto hover:text-neutral-400" />
        </NavLink>
      </div>
      <ul className="flex items-center gap-4 ">
        <li className=" hover:bg-neutral-200 rounded-full ">
          <NavLink to="/">
            <IoSearchOutline className=" w-7 h-auto m-2 " />
          </NavLink>
        </li>
        <li className="  hover:bg-neutral-200 rounded-full">
          <NavLink to="/ShoppingCart">
            <IoBagOutline className="w-7 h-auto m-2" />
          </NavLink>
        </li>
        <li className=" rounded-full hover:bg-neutral-200 mr-6  ">
          <li>
            <AiOutlineMenu className="w-7 h-auto m-2 " />
          </li>
        </li>
      </ul>
    </div>
  );
}
