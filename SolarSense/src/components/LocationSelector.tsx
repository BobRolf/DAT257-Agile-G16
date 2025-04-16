import { useRef } from "react";
import AddressFinder from "./AddressFinder";
import CoordinateInput from "./CoordinateInput";

function LocationSelector() {

  return (
    <>
      <AddressFinder/>
      <CoordinateInput/>
    </>
  );
}

export default LocationSelector;