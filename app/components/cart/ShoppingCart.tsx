import React, { use } from "react";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../../hooks/useContext/shoppingCartContext";

import { useFetchedData } from "@/app/hooks/useContext/API/Api";
function ShoppingCart() {
  const { cartItems } = useShoppingCart();
  const { nikeStoreData } = useFetchedData();
  return (
    //displaying items in the cart
    <div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          quantity={item.quantity}
          shoeSize={item.shoeSize}
        />
      ))}
      <div>
        Total{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = nikeStoreData.trends.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
