import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "25%",
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
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);

  // Function to handle map clicks and add a marker
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
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
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
