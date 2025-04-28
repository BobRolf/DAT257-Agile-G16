import AddressFinder from "./AddressFinder";
import CoordinateInput from "./CoordinateInput";
import MapComponent from "./MapComponent";
import GoogleAPILoader from "./GoogleAPILoader";

function LocationSelector() {

  const enableAddressFinder = true;
  const enableCoordinateInput = false;
  const enableMap = true;

  return (
    <>
      <GoogleAPILoader>
        {enableAddressFinder && <AddressFinder />}
        {enableCoordinateInput && <CoordinateInput />}
        {enableMap && <MapComponent />}
      </GoogleAPILoader>
    </>
  );
}

export default LocationSelector;
