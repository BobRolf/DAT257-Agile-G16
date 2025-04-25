import { createContext, useContext, useState, ReactNode } from "react";

type Coordinates = {
  lat: number;
  lng: number;
};

type CoordinatesContextType = {
  coordinates: Coordinates | null;
  setCoordinates: (coords: Coordinates, source: 'finder' | 'input') => void;
  lastUpdatedBy: 'finder' | 'input' | null;
};

const CoordinatesContext = createContext<CoordinatesContextType | undefined>(undefined);

export function CoordinatesProvider({ children }: { children: ReactNode }) {
  const [coordinates, setCoords] = useState<Coordinates | null>(null);
  const [lastUpdatedBy, setLastUpdatedBy] = useState<'finder' | 'input' | null>(null);

  const setCoordinates = (coords: Coordinates, source: 'finder' | 'input') => {
    setCoords(coords);
    setLastUpdatedBy(source);
  };

  return (
    <CoordinatesContext.Provider value={{ coordinates, setCoordinates, lastUpdatedBy }}>
      {children}
    </CoordinatesContext.Provider>
  );
}

export function useCoordinates() {
  const context = useContext(CoordinatesContext);
  if (!context) throw new Error("useCoordinates must be used within a CoordinatesProvider");
  return context;
}
