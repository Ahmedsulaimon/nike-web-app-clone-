import React from "react";
import nikeStoreData from "@/app/Data/nikeStoreData.json";
import Image from "next/image";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../../hooks/useContext/shoppingCartContext";
import { useSelectedSize } from "../../hooks/useContext/sizes";

type CartItemProps = {
  id: number;
  quantity: number;
  shoeSize: number;
};

function CartItem({ id, quantity, shoeSize }: CartItemProps) {
  const { selectedSize } = useSelectedSize();
  const { removeFromCart } = useShoppingCart();

  const item = nikeStoreData.trends.find((i) => i.id === id);

  if (item == null) {
    return null;
  }

  return (
    <>
      {/* cart items template and description */}
      <div>
        <Image
          alt={item.title}
          src={item.img}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
          width={200}
          height={200}
        />
      </div>
      <div>
        <p>{item.title}</p>
        <p>{item.desc}</p>
        <p>{item.colour}</p>
        <p>
          {selectedSize !== -1 && nikeStoreData.dunkSizes[shoeSize]
            ? nikeStoreData.dunkSizes[shoeSize].size
            : "Size not selected"}
        </p>

        {quantity}
        <div> {formatCurrency(item.price * quantity)}</div>
        <button onClick={() => removeFromCart(item.id, shoeSize)}>
          &times;
        </button>
      </div>
    </>
  );
}

export default CartItem;
