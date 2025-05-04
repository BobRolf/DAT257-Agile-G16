import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { useCoordinates } from "../../context/CoordinatesContext";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const startCenter = {
  lat: 63,
  lng: 16,
};

const Bounds = {
  north: 70.0,
  south: 50.0,
  west: -15.0,
  east: 45.0,
};

const MapComponent = () => {
  const [marker, setMarkers] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const { setCoordinates, lastUpdatedBy, coordinates } = useCoordinates();

  // Function to handle map clicks and add a marker
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      const newMarker = {
        lat: lat,
        lng: lng,
      };
      console.log("Marker added at:", event.latLng.lat(), event.latLng.lng()),
        setMarkers(newMarker);
      setCoordinates({ lat, lng }, "map");
    }
  };

  useEffect(() => {
    if (
      (lastUpdatedBy === "input" || lastUpdatedBy === "finder") &&
      coordinates
    ) {
      const newMarker = {
        lat: coordinates.lat,
        lng: coordinates.lng,
      };
      setMarkers(newMarker);
    }
  }, [lastUpdatedBy, coordinates]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={startCenter}
      zoom={4}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        restriction: {
          latLngBounds: Bounds,
          strictBounds: true,
        },
      }}
      onClick={handleMapClick} // Add the onClick event to handle map clicks
    >
      {/* Render markers */}
      {marker && <Marker position={marker} />}
    </GoogleMap>
  );
};

export default MapComponent;
