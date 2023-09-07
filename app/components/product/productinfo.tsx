import React from "react";
import { useFetchedData } from "@/app/hooks/useContext/API/Api";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import classNames from "classnames";
import { useShoppingCart } from "../../hooks/useContext/shoppingCartContext";
import { useSelectedSize } from "../../hooks/useContext/sizes";
type StoreItemProps = {
  id: number;
};

function ProductInfo({ id }: StoreItemProps): React.JSX.Element | null {
  const { selectedSize, setSelectedSize } = useSelectedSize();
  const { nikeStoreData } = useFetchedData();
  const { increaseCartQuantity } = useShoppingCart();
  const [error, Seterror] = useState(false);

  const errorMessage = () => {
    Seterror(selectedSize === -1 ? true : false);
  };
  const item = nikeStoreData.trends.find((i) => i.id === id);

  if (item == null) {
    return null;
  }

  return (
    <div className=" w-[350px]  my-10 ">
      <div className="mb-20 leading-10">
        <p className=" text-red-500 font-semibold">Sustainable Materials</p>
        <h1 className=" text-2xl font-medium "> Nike Dunk Low</h1>
        <h2 className=" font-medium "> Women's Shoes</h2>
        <span className=" font-semibold"> &#163;109.95 </span>
      </div>
      <div>
        <div className=" flex justify-between">
          <p
            className={classNames("font-semibold", {
              "text-red-600": error === true,
            })}
          >
            Select Size
          </p>

          <p className=" font-semibold   text-neutral-400">Size Guide</p>
        </div>
        <div
          className={classNames("grid grid-cols-3 gap-1 mt-2  mb-2", {
            "border border-red-600 rounded-md": error === true,
          })}
        >
          {nikeStoreData.dunkSizes.map((sizes, index) =>
            index && sizes.quantity === 0 ? (
              <p
                key={index}
                className="border rounded-lg font-semibold px-7 py-2 text-center border-gray-300 text-gray-300 bg-gray-100"
              >
                {" "}
                {sizes.size}
              </p>
            ) : (
              <button
                onClick={() => {
                  setSelectedSize(index);
                  Seterror(false);
                }}
                className={classNames(
                  "border rounded-lg font-semibold px-7 py-2 text-center border-gray-300 hover:border hover:border-black",
                  {
                    "border border-gray-950": selectedSize === index,
                  }
                )}
              >
                {sizes.size}
              </button>
            )
          )}
        </div>
      </div>
      {error === true && (
        <p className=" text-red-600 text-base pt-1 pb-5 font-semibold">
          Please select a size
        </p>
      )}
      <div className=" border border-gray-300 px-8 pb-5 pt-3 text-center mx-2 rounded-lg mb-3 text-sm ">
        <p className=" flex mr-2 leading-8">
          {" "}
          <p className=" mr-1">Make 3 payments of £36.65.</p>{" "}
          <strong> Klarna.</strong>
        </p>{" "}
        18+, T&C apply, Credit subject to status.
      </div>
      <div className=" flex flex-col gap-2">
        <button
          onClick={() => {
            errorMessage();
            increaseCartQuantity(item.id, selectedSize);
          }}
          className="w-full py-5 rounded-full font-bold text-white text-center bg-black hover:bg-neutral-600"
        >
          Add to Bag
        </button>

        <button className="w-full py-5 rounded-full font-bold    border border-gray-300  flex justify-center hover:border-black ">
          {" "}
          <p className="flex ">
            {" "}
            Favourite <CiHeart className="w-5 h-auto ml-2" />
          </p>
        </button>
      </div>
      <p className=" px-7 mb-8 font-medium mx-6 my-8">
        This product is excluded from site promotions and discounts.
      </p>
      <p>
        <strong>Free Pick-up</strong>
      </p>
      <p className=" font-medium  pb-1">Find a Store</p>
      <p className=" bg-gray-200 rounded-md font-medium pt-4 pl-3 pb-7 pr-7 my-12">
        This product is made with at least 20% recycled content by weight
      </p>
      <p className="  font-medium mb-4">
        Created for the hardwood but taken to the streets, the '80s icon returns
        to let you do good by looking good. Now made from at least 20% recycled
        materials by weight, we refreshed a classic that keeps the original
        integrity with a minimised impact. Crafted from synthetic leather, the
        Dunk Low channels vintage baller style and simple living onto the
        streets.
      </p>

      <li>Colour Shown: White/Black</li>
      <li>Style: DD1873-102</li>
    </div>
  );
}

export default ProductInfo;
