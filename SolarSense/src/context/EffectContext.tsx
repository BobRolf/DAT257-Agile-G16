import { createContext, useContext, useState, ReactNode } from "react";

type EffectContextType = {
  effect: number | null;
  setEffect: (value: number) => void;
};
const EffectContext = createContext<EffectContextType | undefined>(undefined);

export function EffectProvider({ children }: { children: ReactNode }) {
  const [effect, setEffect] = useState<number | null>(null);

  const updateEffect = (value: number) => {
    setEffect(value);
  };

  return (
    <EffectContext.Provider value={{ effect, setEffect: updateEffect }}>
      {children}
    </EffectContext.Provider>
  );
}
export function useEffect() {
  const context = useContext(EffectContext);
  if (!context)
    throw new Error("useEffectContext must be used within an EffectProvider");
  return context;
}
