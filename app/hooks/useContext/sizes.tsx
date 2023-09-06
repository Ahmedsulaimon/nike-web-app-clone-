import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

//  type for the selected size context
interface SelectedSizeContextType {
  selectedSize: number;
  setSelectedSize: React.Dispatch<React.SetStateAction<number>>;
}

// context for selectedSize
const SelectedSizeContext = createContext<SelectedSizeContextType | undefined>(
  undefined
);

//  custom hook for using the selectedSize context
export function useSelectedSize(): SelectedSizeContextType {
  const context = useContext(SelectedSizeContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedSize must be used within a SelectedSizeProvider"
    );
  }
  return context;
}

// Create a provider component for the selectedSize context
interface SelectedSizeProviderProps {
  children: ReactNode;
}

export function SelectedSizeProvider({ children }: SelectedSizeProviderProps) {
  // Ensure that this component only runs on the client-side
  if (typeof window === "undefined") {
    return null;
  }

  const initialSelectedSize = localStorage.getItem("selectedSize");
  const [selectedSize, setSelectedSize] = useState<number>(
    initialSelectedSize ? parseInt(initialSelectedSize, 10) : -1
  );

  useEffect(() => {
    localStorage.setItem("selectedSize", selectedSize.toString());
  }, [selectedSize]);

  return (
    <SelectedSizeContext.Provider value={{ selectedSize, setSelectedSize }}>
      {children}
    </SelectedSizeContext.Provider>
  );
}
