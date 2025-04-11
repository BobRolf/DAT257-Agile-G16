import Autocomplete from "react-google-autocomplete"; // Importing the Autocomplete component for Google Maps

function AddressFinder() {
  // Default position for the map or markers
  const position = { lat: 53.54, lng: 10 };

  return (
    <>
      {/* Autocomplete component for searching locations */}
      <div>
        <Autocomplete
          apiKey={
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY // Fetching the Google Maps API key from environment variables
          }
          onPlaceSelected={(place) => {
            // Callback function triggered when a place is selected
            if (place?.geometry?.location) {
              const lat = place.geometry.location.lat(); // Extract latitude
              const lng = place.geometry.location.lng(); // Extract longitude
              console.log("Lat:", lat, "Lng:", lng); // Log the coordinates to the console
            }
          }}
          options={{
            types: ["address"], // Restrict search to addresses
            componentRestrictions: { country: "se" }, // Restrict search to Sweden
          }}
        ></Autocomplete>
      </div>
    </>
  );
}
