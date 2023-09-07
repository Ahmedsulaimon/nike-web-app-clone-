import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import HoverDropupMenu from "./dropup";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";

export default function Desktop() {
  const { nikeStoreData } = useFetchedData();
  return (
    // footer styling for desktop or tablet
    <div className=" lg:ml-64 lg:mr-56">
      <div className=" justify-between text-xs text-bold py-6 pt-14 mb-8">
        <div className=" flex md:flex-wrap gap-4 px-4 mb-10 float-right mr-16 md:justify-end">
          <BsTwitter className=" h-8 w-8 bg-neutral-400 rounded-full text-black  p-1 hover:bg-neutral-200" />
          <FaFacebookF className=" h-8 w-8  bg-neutral-400 rounded-full text-black  p-1 hover:bg-neutral-200" />
          <TfiYoutube className=" h-8 w-8 bg-neutral-400 rounded-full text-black  p-1 hover:bg-neutral-200" />{" "}
          <AiFillInstagram className=" h-8 w-8 bg-neutral-400 rounded-full text-black p-1 hover:bg-neutral-200" />
        </div>
        <div className=" grid grid-cols-4  ">
          <div>
            <ul className=" font-mono font-extrabold leading-8  text-sm ">
              {nikeStoreData.general.map((general) => (
                <li>{general}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className=" mb-4 text-neutral-300">GET HELP</h1>
            <div className=" leading-8 text-neutral-500">
              {nikeStoreData.getHelp.map((help) => (
                <ul className=" hover:text-gray-300">
                  <li>{help}</li>
                </ul>
              ))}
            </div>
          </div>
          <div>
            <h1 className=" mb-4 text-neutral-300">About NIKE</h1>
            <div className=" leading-8 text-neutral-500">
              {" "}
              {nikeStoreData.aboutNike.map((about) => (
                <ul className=" hover:text-gray-300">
                  <li>{about}</li>
                </ul>
              ))}
            </div>
          </div>
          <div>
            <h1 className=" mb-4 text-neutral-300">JOIN US</h1>
            <div className=" leading-8 text-neutral-500">
              {" "}
              {nikeStoreData.joinUs.map((join) => (
                <ul className=" hover:text-gray-300">
                  <li>{join}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="  mr-16 float-right">
        <div className=" flex flex-row lg:w-[600px] mr-10 sm:w-[300px] md:w-[400px]">
          <div>
            <HoverDropupMenu />
          </div>
          <div className=" text-neutral-500 text-xs text-bold gap-4 px-4 flex flex-wrap  mt-[2px] leading-6  justify-end ">
            {nikeStoreData.moreInformation.map((info) => (
              <ul className=" hover:text-gray-300">
                <li>{info}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div>
        {" "}
        <div className=" px-2 flex flex-row pt-10">
          <p className=" text-white flex flex-row text-xs font-normal gap-1  pb-3 mr-4">
            {" "}
            <IoLocationSharp className=" h-4 w-4 font-medium" /> United Kingdom
          </p>
          <p className=" text-neutral-500 flex flex-row text-xs font-semibold gap-1 ">
            <AiOutlineCopyrightCircle /> {new Date().getFullYear()} Nike, Inc.
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
