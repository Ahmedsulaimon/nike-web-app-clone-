import React, { useState } from "react";

import { useFetchedData } from "@/app/hooks/useContext/API/Api";
export default function NewFeatured(props: any) {
  const { nikeStoreData } = useFetchedData();
  return (
    // navbar dropdown menu and contents
    <div
      className="relative inline-block"
      onMouseEnter={props.toggleMenu}
      onMouseLeave={props.toggleMenu}
    >
      <button className="border border-x-0 border-y-0 border-black hover:border-b-2 ">
        {props.newFeature}
      </button>

      {props.showMenu && (
        <div className="absolute">
          <div className="fixed flex justify-center  w-screen  h-auto overflow-y-auto right-0 left-0  ">
            <div className="grid grid-cols-4  py-7  items-center  bg-white h-full  w-full px-80 mt-3">
              <div className="leading-6 text-neutral-500">
                {nikeStoreData.NewFeature.map((feature, index) => (
                  <ul>
                    <li key={index}>{feature}</li>
                  </ul>
                ))}
              </div>

              <div>
                <h1 className="mb-4">Shop Icons</h1>
                <div className="leading-6 text-neutral-500">
                  {nikeStoreData.Icons.map((icon, index) => (
                    <ul>
                      <li key={index}>{icon.title}</li>
                    </ul>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="mb-4">Best Read</h1>
                <div className="leading-6 text-neutral-500">
                  {nikeStoreData.bestRead.map((read, index) => (
                    <ul>
                      <li key={index}>{read}</li>
                    </ul>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="mb-4">Guides</h1>
                <div className="leading-6 text-neutral-500">
                  {nikeStoreData.guide.map((guides, index) => (
                    <ul>
                      <li key={index}>{guides}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
