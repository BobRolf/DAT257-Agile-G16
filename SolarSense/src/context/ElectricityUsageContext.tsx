import { createContext, useContext, useState, ReactNode } from "react";

type ElectricityUsageContextType = {
  electricityUsage: number | null;
  setElectricityUsage: (value: number) => void;
};

const ElectricityUsageContext = createContext<
  ElectricityUsageContextType | undefined
>(undefined);

export function ElectricityUsageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [electricityUsage, setElectricityUsage] = useState<number | null>(null); // Fixed capitalization

  const updateElectricityUsage = (value: number) => {
    setElectricityUsage(value);
  };

  return (
    <ElectricityUsageContext.Provider
      value={{ electricityUsage, setElectricityUsage: updateElectricityUsage }} // Fixed capitalization
    >
      {children}
    </ElectricityUsageContext.Provider>
  );
}

export function useElectricityUsage() {
  const context = useContext(ElectricityUsageContext);
  if (!context)
    throw new Error(
      "useElectricityUsage must be used within an ElectricityUsageProvider"
    );
  return context;
}
