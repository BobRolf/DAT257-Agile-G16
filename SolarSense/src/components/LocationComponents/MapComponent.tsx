import { GoogleMap, Marker, Polygon } from "@react-google-maps/api";
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
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [polygonPaths, setPolygonPaths] = useState<google.maps.LatLngLiteral[]>(
    []
  );

  const { setCoordinates, lastUpdatedBy, coordinates } = useCoordinates();

  // Load Sweden.geojson and set the polygon paths
  useEffect(() => {
    const loadGeoJson = async () => {
      try {
        const response = await fetch("/src/assets/Sweden.geojson");
        const geoJson = await response.json();

        // Extract coordinates from GeoJSON and convert to LatLngLiteral[]
        const paths = geoJson.features[0].geometry.coordinates[0].map(
          ([lng, lat]: [number, number]) => ({ lat, lng })
        );
        setPolygonPaths(paths);
      } catch (error) {
        console.error("Failed to load Sweden.geojson:", error);
      }
    };

    loadGeoJson();
  }, []);

  // Function to handle map clicks and add a marker
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const latLng = event.latLng;
      const isInsidePolygon = google.maps.geometry.poly.containsLocation(
        latLng,
        new google.maps.Polygon({ paths: polygonPaths })
      );

      if (isInsidePolygon) {
        setMarker({ lat: latLng.lat(), lng: latLng.lng() });
        setCoordinates({ lat: latLng.lat(), lng: latLng.lng() }, "map");
      } else {
        alert("You can only place markers in Sweden.");
      }
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
      setMarker(newMarker);
    }
  }, [lastUpdatedBy, coordinates]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={startCenter}
      zoom={6}
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
      onClick={handleMapClick}
    >
      {marker && <Marker position={marker} />}
      {polygonPaths.length > 0 && (
        <Polygon
          paths={polygonPaths}
          options={{
            fillOpacity: 0, // Make the polygon invisible
            strokeOpacity: 0, // Add a border for visualization
            clickable: false, // Make the polygon non-interactive
          }}
        />
      )}
    </GoogleMap>
  );
};

export default MapComponent;
