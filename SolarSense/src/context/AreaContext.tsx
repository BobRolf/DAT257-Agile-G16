import { createContext, useContext, useState, ReactNode } from "react";

type AreaContextType = {
  area: number | null;
  setArea: (value: number) => void;
};

const AreaContext = createContext<AreaContextType | undefined>(undefined);

export function AreaProvider({ children }: { children: ReactNode }) {
  const [area, setArea] = useState<number | null>(null);

  const updateArea = (value: number) => {
    setArea(value);
  };

  return (
    <AreaContext.Provider value={{ area, setArea: updateArea }}>
      {children}
    </AreaContext.Provider>
  );
}

export function useArea() {
  const context = useContext(AreaContext);
  if (!context) throw new Error("useArea must be used within an AreaProvider");
  return context;
}
