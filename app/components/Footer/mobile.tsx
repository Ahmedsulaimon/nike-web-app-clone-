import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import HoverDropupMenu from "./dropup";
import AccordionContent from "../dropmenu/accordion/accordionContent";
import nikeStoreData from "@/app/Data/nikeStoreData.json";

export default function Mobile() {
  return (
    //footer styling for mobile device
    <div>
      <ul className=" font-mono font-extrabold leading-8 px-4 py-6 text-sm border border-t-0 border-x-0 border-b-1 border-neutral-700">
        {nikeStoreData.general.map((general) => (
          <li>{general}</li>
        ))}
      </ul>
      {/* accordion */}
      <div>
        <AccordionContent />
      </div>
      <div className=" flex flex-wrap gap-4 px-4 mb-10">
        <BsTwitter className=" h-8 w-8 bg-neutral-400 rounded-full text-black  p-1 hover:bg-neutral-200" />
        <FaFacebookF className=" h-8 w-8  bg-neutral-400 rounded-full text-black  p-1 hover:bg-neutral-200" />
        <TfiYoutube className=" h-8 w-8 bg-neutral-400 rounded-full text-black  p-1 hover:bg-neutral-200" />{" "}
        <AiFillInstagram className=" h-8 w-8 bg-neutral-400 rounded-full text-black p-1 hover:bg-neutral-200" />
      </div>

      <div className=" px-4">
        <p className=" text-white flex flex-row text-xs font-normal gap-1  mb-4">
          {" "}
          <IoLocationSharp className=" h-auto w-4 font-medium" /> United Kingdom
        </p>
        <p className=" text-neutral-500 flex flex-row text-xs font-semibold gap-1 mb-4">
          <AiOutlineCopyrightCircle /> {new Date().getFullYear()} Nike, Inc. All
          Rights Reserved
        </p>
      </div>
      <div className="container  py-3 ">
        <HoverDropupMenu />
      </div>
      <div className=" text-neutral-500 text-xs text-bold leading-10 px-3">
        {nikeStoreData.moreInformation.map((info) => (
          <ul className=" hover:text-gray-300">
            <li>{info}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
