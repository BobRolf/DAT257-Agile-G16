import AddressFinder from "./AddressFinder";
import CoordinateInput from "./CoordinateInput";
import MapComponent from "./MapComponent";
import GoogleAPILoader from "./GoogleAPILoader";

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
