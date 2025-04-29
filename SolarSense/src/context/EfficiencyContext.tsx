import { createContext, useContext, useState, ReactNode } from "react";

type EfficiencyContextType = {
  efficiency: number | null;
  setEfficiency: (value: number) => void;
};

const EfficiencyContext = createContext<EfficiencyContextType | undefined>(
  undefined
);

export function EfficiencyProvider({ children }: { children: ReactNode }) {
  const [efficiency, setEfficiency] = useState<number | null>(null);

  const updateEfficiency = (value: number) => {
    setEfficiency(value);
  };

  return (
    <EfficiencyContext.Provider
      value={{ efficiency, setEfficiency: updateEfficiency }}
    >
      {children}
    </EfficiencyContext.Provider>
  );
}

export function useEfficiency() {
  const context = useContext(EfficiencyContext);
  if (!context)
    throw new Error("useEfficiency must be used within an EfficiencyProvider");
  return context;
}
