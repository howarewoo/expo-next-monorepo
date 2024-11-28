"use client";

import { ReactNode, createContext, useContext, useState } from "react";

export type HomeContextType = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

export const HomeContext = createContext<HomeContextType>({
  count: 0,
  incrementCount: () => {},
  decrementCount: () => {},
});

export type HomeProviderProps = {
  children: ReactNode;
};

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <HomeContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </HomeContext.Provider>
  );
};

export function useHomeContext() {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
}
