import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
  shoeSize: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number, shoeSize: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number, shoeSize: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // const { selectedSize } = useSelectedSize();
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  if (
    !Array.isArray(cartItems) ||
    cartItems.some(
      (item) =>
        typeof item !== "object" ||
        !("id" in item) ||
        !("quantity" in item) ||
        !("shoeSize" in item)
    )
  ) {
    // If it's not a valid array, reset the cartItems to an empty array
    setCartItems([]);
  }

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number, shoeSize: number) {
    setCartItems((currItems) => {
      const existingItem = currItems.find(
        (item) => item.id === id && item.shoeSize === shoeSize
      );

      if (!existingItem) {
        // Item not in cart, add it
        return [...currItems, { id, quantity: 1, shoeSize }];
      } else {
        // Item already in cart, increment quantity
        return currItems.map((item) =>
          item.id === id && item.shoeSize === shoeSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number, shoeSize: number) {
    setCartItems((currItems) => {
      return currItems.filter(
        (item) => !(item.id === id && item.shoeSize === shoeSize)
      );
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
