import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { DataTypes } from "@/app/Data/datatypes";
import data from "@/app/Data/data";

interface FetchedDataContextType {
  nikeStoreData: DataTypes;
  setnikeStoreData: React.Dispatch<React.SetStateAction<DataTypes>>;
  isLoading: boolean;
}

const FetchedDataContext = createContext<FetchedDataContextType | undefined>(
  undefined
);

export function useFetchedData(): FetchedDataContextType {
  const context = useContext(FetchedDataContext);
  if (context === undefined) {
    throw new Error("useFetchedData must be used within a FetchedDataProvider");
  }
  return context;
}

interface FetchedDataProviderProps {
  children: ReactNode;
}

export function FetchDataProvider({ children }: FetchedDataProviderProps) {
  const [nikeStoreData, setnikeStoreData] = useState<DataTypes>(data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // API endpoint URL
    const apiUrl = "http://localhost:5000/api/collection";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // fetched data in the state variable
        setnikeStoreData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <FetchedDataContext.Provider
      value={{ nikeStoreData, setnikeStoreData, isLoading }}
    >
      {children}
    </FetchedDataContext.Provider>
  );
}
