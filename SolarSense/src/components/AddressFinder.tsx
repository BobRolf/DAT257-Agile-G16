import { Autocomplete } from "@react-google-maps/api";
import { useCoordinates } from "../context/CoordinatesContext";
import { useEffect, useRef, useState } from "react";

export function AddressFinder() {
  const { setCoordinates, lastUpdatedBy } = useCoordinates();
  const autocompleteRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

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

  return (
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
      options={{ types: ["address"], componentRestrictions: { country: "se" } }}
    >
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
