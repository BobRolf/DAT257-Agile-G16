import { useRef } from "react";
import AddressFinder from "./AddressFinder";
import CoordinateInput from "./CoordinateInput";
import MapComponent from "./MapComponent";
import GoogleAPILoader from "./GoogleAPILoader";
libraries: ["places"];

function LocationSelector() {
  return (
    <>
      <GoogleAPILoader>
        <AddressFinder />
        <CoordinateInput />
        <MapComponent />
      </GoogleAPILoader>
    </>
  );
}

export default LocationSelector;
