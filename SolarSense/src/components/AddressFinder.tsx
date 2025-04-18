import { Autocomplete } from "@react-google-maps/api";
import { useCoordinates } from "../context/CoordinatesContext";
import { useEffect, useRef, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries: "places"[] = ["places"];

function AddressFinder() {
  const { setCoordinates, lastUpdatedBy } = useCoordinates();
  const autocompleteRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Your key from .env
    libraries, // Required for Autocomplete
  });

  useEffect(() => {
    if (lastUpdatedBy === "input" && autocompleteRef.current) {
      autocompleteRef.current.value = "";
    }
  }, [lastUpdatedBy]);

  const onLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCoordinates({ lat, lng }, "finder");
      }
    }
  };

  if (loadError) return <div>Failed to load Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        className="form-control"
        placeholder="Search address"
        ref={autocompleteRef}
      />
    </Autocomplete>
  );
}

export default AddressFinder;
