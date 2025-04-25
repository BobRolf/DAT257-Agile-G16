import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";

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

  // Function to handle map clicks and add a marker
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      console.log("Marker added at:", event.latLng.lat(), event.latLng.lng()),
        setMarkers(newMarker);
    }
  };

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
